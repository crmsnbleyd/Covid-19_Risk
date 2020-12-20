import React from "react";
import './Main.css';
import Reservation from "./Form";
import { Container, Row} from "reactstrap";
import doctor from './img/doctor.png'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          obj: {}
        }
    }
    manipulateValues() {
       this.state.array=[0,0,0,0,0,0,0,0,0];
       var x;
       for (x in this.state.obj.checked) {
           this.state.array[this.state.obj.checked[x]-1]=1;
       }
       this.state.obj.bmi = this.state.obj.weight/((this.state.obj.height/100)*(this.state.obj.height/100));
       console.log(this.state.array);
       console.log(this.state.obj.cv);
       console.log(this.state.obj.cs);
       console.log(this.state.obj.cc);
    }
    render(){
        if(this.state.page===0){
            var form = <Reservation pageChange={()=>this.setState(state => ({page: state.page + 1}))} valuesAdd={(e)=>this.setState({obj: e})} />;
            
        }
        else {
            const res = document.getElementById('res');
            console.log(res);
            res.innerHTML=`<h2>Processing your data</h2><div class="dot-flashing"></div>`;
            this.manipulateValues();
            var form = <Reservation pageChange={()=>this.setState(state => ({page: state.page + 1}))} valuesAdd={(e)=>this.setState({obj: e})} />;
            console.log('Fetching details for ', this.state.obj);
            fetch(`https://714c0306eb7d.ngrok.io/sent/${this.state.obj.sex}/${this.state.obj.smoking}/${this.state.obj.age}/${this.state.obj.bmi}/${this.state.obj.cv}/${this.state.obj.cs}/${this.state.obj.cc}/${this.state.array[0]}/${this.state.array[1]}/${this.state.array[2]}/${this.state.array[3]}/${this.state.array[4]}/${this.state.array[5]}/${this.state.array[6]}/${this.state.array[7]}/${this.state.array[8]}/${this.state.obj.hw}`)
            .then(response=>response.json())
            .then(data => 
                {console.log(data) ;
                 res.innerHTML=`<h2>${data.risk}</h2><h4>You have an approximately ${parseFloat(data.per).toFixed(2)}% chance of getting infected.</h4>`;
                });
        }
        return(
            <Container className="mt-5 text-justify">
                <Row>
                    <div className="col-md-6 col-sm-12 text-light" id="opaque">{form}</div>
                    <div className="col-md-6 col-sm-12 text-center"><div id="res"><h2 className="ph">Please Enter Your Details</h2></div>
                    <span><img src={doctor} className="doctor"></img></span></div>
                </Row>
            </Container>
        );
    }
}
export default Main;