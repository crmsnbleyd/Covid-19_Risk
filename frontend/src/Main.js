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
            this.manipulateValues();
            var form;
            console.log('Fetching details for ', this.state.obj);
            fetch(`https://b7b5668ed3a8.ngrok.io/sent/${this.state.obj.sex}/${this.state.obj.smoking}/${this.state.obj.age}/${this.state.obj.bmi}/${this.state.obj.cv}/${this.state.obj.cs}/${this.state.obj.cc}/${this.state.array[0]}/${this.state.array[1]}/${this.state.array[2]}/${this.state.array[3]}/${this.state.array[4]}/${this.state.array[5]}/${this.state.array[6]}/${this.state.array[7]}/${this.state.array[8]}/${this.state.obj.hw}`)
            .then(response=>response.json())
            .then(data => {console.log(data)});
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