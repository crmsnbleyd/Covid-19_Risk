import uvicorn
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
import requests

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor

data = pd.read_csv('cleaned_covid_dataset.csv')
data.drop(['Unnamed: 0'],axis = 1, inplace = True)
data.drop(['blood_type__abn','blood_type__abp','blood_type__an','blood_type__ap','blood_type__bn','blood_type__bp','blood_type__on','blood_type__op','blood_type__unknown','working__home','working__never','working__stopped','working__travel critical','working__travel non critical','insurance__blank','insurance__no','insurance__yes','contacts_count','house_count','public_transport_count','other_chronic','nursing_home'],axis = 1, inplace = True)
# Filling the missing age values
data.age.fillna(data.age.mean(),inplace = True)
Y = data['risk_infection']
X = data.drop(['risk_infection'],axis = 1)
print(Y.shape, X.shape)
X_train = np.array(X)
Y_train = np.array(Y)
Y_train = np.reshape(Y_train, (len(Y_train),1))
model = RandomForestRegressor(n_estimators = 2000, random_state=0, n_jobs = -1, verbose = 1)
model.fit(X_train,Y_train)

def sexEnc(sex):
  s = []
  if sex == 0:
    s.append([1,0,0])
  elif sex == 1:
    s.append([0,1,0])
  elif sex == 2:
    s.append([0,0,1])
  return s

def smEnc(smoking):
  s = []
  if smoking == 0:
    s.append([1,0,0,0,0,0,0,0])
  elif smoking == 1:
    s.append([0,1,0,0,0,0,0,0])
  elif smoking == 2:
    s.append([0,0,1,0,0,0,0,0])
  elif smoking == 3:
    s.append([0,0,0,1,0,0,0,0])
  elif smoking == 4:
    s.append([0,0,0,0,1,0,0,0])
  elif smoking == 5:
    s.append([0,0,0,0,0,1,0,0])
  elif smoking == 6:
    s.append([0,0,0,0,0,0,1,0])
  elif smoking == 7:
    s.append([0,0,0,0,0,0,0,1])
  return s
  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return {"Home page"}
# female = 0
# male = 1
# other = 2
########################### Risk Prediction ###############################
@app.get("/sent/{sex}/{smoking}/{age}/{bmi}/{covid19_positive}/{covid19_symptoms}/{covid19_contact}/{asthma}/{kidney_disease}/{liver_disease}/{compromised_immune}/{heart_disease}/{lung_disease}/{diabetes}/{hiv_positive}/{hypertension}/{health_worker}")
def sent(sex : int, smoking: int, age: int, bmi: float, covid19_positive:int, covid19_symptoms:int, covid19_contact:int, asthma:int, kidney_disease:int, liver_disease:int, compromised_immune:int, heart_disease:int, lung_disease:int, diabetes:int, hiv_positive:int, hypertension:int, health_worker:int):
    s = sexEnc(sex)
    sm = smEnc(smoking)
    tst = []
    tst.append([s[0][0],s[0][1],s[0][2],sm[0][0],sm[0][1],sm[0][2],sm[0][3],sm[0][4],sm[0][5],sm[0][6],sm[0][7],age,bmi,covid19_positive,covid19_symptoms,covid19_contact,asthma,kidney_disease,liver_disease,compromised_immune,heart_disease,lung_disease,diabetes,hiv_positive,hypertension,health_worker])
    tst = np.array(tst)
    pred = model.predict(tst)
    print(pred[0])
    if pred[0] >= 80.0:
      dct = {"risk":"Very High Risk", "per":str(pred[0])}
    elif pred[0] >= 30.0 and pred[0]< 80.0:
      dct = {"risk":"High Risk", "per":str(pred[0])}
    elif pred[0] >= 10.0 and pred[0]< 30.0:
      dct = {"risk":"Medium Risk", "per":str(pred[0])}
    else:
      dct = {"risk":"Low Risk", "per":str(pred[0])}
    jsonData = jsonable_encoder(dct)
    return JSONResponse(jsonData)
    
if __name__ == "__main__":
  uvicorn.run("app:app", host="0.0.0.0", port=8080) 
