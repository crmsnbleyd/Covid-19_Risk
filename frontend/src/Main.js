import React from "react" 
import Reservation from "./Form";
import { Container} from "reactstrap";
// import { Result } from "./Result";
// (JSON.stringify(values, null, 2))

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          obj: {}
        }
    }
    manipulateValues() {
       this.state.array=[0,0,0,0,0,0,0,0];
       var x;
       for (x in this.state.obj.checked) {
           this.state.array[this.state.obj.checked[x]-1]=1;
       }
       this.state.obj.bmi = this.state.obj.weight/((this.state.obj.height/100)*(this.state.obj.height/100));
    }
    render(){
        if(this.state.page===0){
            var form = <Reservation pageChange={()=>this.setState(state => ({page: state.page + 1}))} valuesAdd={(e)=>this.setState({obj: e})} />;
        }
        else {
            this.manipulateValues();
            var form;
            console.log('Fetching details for ', this.state.obj);
            // fetch(`http://b163a5c0ddf6.ngrok.io/sent/${this.state.obj.sex}/${this.state.obj.smoking}/${this.state.obj.age}/${this.state.obj.bmi}/${this.state.obj.cv}/${this.state.obj.cs}/${this.state.obj.cc}/${this.state.checked[0]}/${this.state.checked[1]}/${this.state.checked[2]}/${this.state.checked[3]}/${this.state.checked[4]}/${this.state.checked[5]}/${this.state.checked[6]}/${this.state.checked[7]}/${this.state.checked[8]}/${this.state.obj.hw}`)
            // .then(response=>response.json())
            // .then(data => {console.log(data)});
            // form = < Result props />
        }
        return(
            <Container className="mt-5 text-justify bg-dark text-light">
                {form}
            </Container>
        );
    }
}
export default Main;