import React from "react";
import { Formik, Field, Form } from "formik";
class Reservation extends React.Component {
    constructor(props) {
        super(props);
    }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }
  render() {
    const sweep = (ms) => new Promise((r) => setTimeout(r, ms));
    return (
      <div>
        <Formik initialValues={{checked: [], smoking: 0, sex: 0, age: ""}} onSubmit={async (values) => {this.props.valuesAdd(values) ; this.props.pageChange(); }}>
          {({ values }) => (
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          <br/>
            <label>
                <br/>Sex: &nbsp;
                <select name = "dropdown">
                  <option value = "Female" onClick={()=>values.sex="0"}>Female</option>
                  <option value = "Male" onClick={()=>values.sex="1"}>Male</option>
                  <option value = "Other" onClick={()=>values.sex="2"}>Other</option>
                </select>  
            </label>
            <br /><br/>Age<br/>
              <Field name="age" type='number' required max='199' min='0'/>
              <br/><br/>Weight (kg)<br/>
              <Field name="weight" type='number' required max='199' min='1'/>
              <br/><br/>Height (cm)<br/>
              <Field name="height" type='number' required max='300' min='50'/>
            <br /><br/>
            <label>
                Are you a Health Worker? &nbsp;
                <select name = "dropdown">
                  <option value = "Yes" onClick={()=>values.hw="0"}>No</option>
                  <option value = "No" onClick={()=>values.hw="1"}>Yes</option>
                </select>  
            </label>
            <br />
            <label>
                Have you contracted Covid-19 before? &nbsp;
                <select name = "dropdown">
                  <option value = "Yes" onClick={()=>values.cv="0"}>No</option>
                  <option value = "No" onClick={()=>values.cv="1"}>Yes</option>
                </select>  
            </label>
            <br />
            <label>
                Have you shown Covid-19-like symptoms before? &nbsp;
                <select name = "dropdown">
                  <option value = "Yes" onClick={()=>values.cs="0"}>No</option>
                  <option value = "No" onClick={()=>values.cs="1"}>Yes</option>
                </select>  
            </label>
            <br />
            <label>
                Have you come in contact with a Covid+ person? &nbsp;
                <select name = "dropdown">
                  <option value = "Yes" onClick={()=>values.cc="0"}>No</option>
                  <option value = "No" onClick={()=>values.cc="1"}>Yes</option>
                </select>  
            </label>
            <br />
            <label>
              <Field type="checkbox" name="checked" value="1" />
              &nbsp;Asthma 
            </label>
            <br />
            <label>
              <Field type="checkbox" name="checked" value="2" />
              &nbsp;Kidney Disease
            </label>
            <br />
            <label>
              <Field type="checkbox" name="checked" value="3" />
              &nbsp;Liver Disease
            </label>
            <br />
            <label>
                <Field type="checkbox" name="checked" value="4" />  
                &nbsp;Compromised Immune System
            </label>
            <br />
            <label>
                <Field type="checkbox" name="checked" value="5" />  
                &nbsp;Heart Disease
            </label>
            <br />
            <label>
                <Field type="checkbox" name="checked" value="6" />  
                &nbsp;Lung Disease
            </label>
            <br />
            <label>
                <Field type="checkbox" name="checked" value="7" />  
                &nbsp;Diabetes
            </label>
            <br />
            <label>
                <Field type="checkbox" name="checked" value="8" />  
                &nbsp;HIV Positive
            </label>
            <br />
            <label>
                <Field type="checkbox" name="checked" value="9" />  
                &nbsp;Hypertension
            </label>
            <br />
            <label>Smoking Situation: &nbsp;
              <select name = "dropdown">
                <option value = "SmokeNever" onClick={()=>values.smoking="0"}>Never Smoked</option>
                <option value = "Quit<1" onClick={()=>values.smoking="1"}>Quit Smoking &lt; 1 year ago</option>
                <option value = "Quit<5" onClick={()=>values.smoking="3"}>Quit Smoking 5 years ago</option>
                <option value = "Quit<10" onClick={()=>values.smoking="2"}>Quit Smoking 10 years ago</option>
                <option value = "Vape" onClick={()=>values.smoking="4"}>Vaping Only</option>
                <option value = "Light" onClick={()=>values.smoking="6"}>Light Smoking</option>
                <option value = "Medium" onClick={()=>values.smoking="7"}>Medium Smoking</option>
                <option value = "Heavy" onClick={()=>values.smoking="5"}>Heavy Smoking</option>
              </select>
            </label>
            <br /><br />
          <button type="submit">Results</button>
          <br /><br />
        </Form>
      )}
          </Formik>
      </div>
    );
  }
}

export default Reservation;