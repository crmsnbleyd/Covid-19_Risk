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
    //    this.state.obj.sex;
    //    this.state.obj.smoking;
    //    this.state.obj.bmi = this.state.obj.weight/((this.state.obj.height/100)*(this.state.obj.height/100));
    //    this.state.obj.cv;           coronavirus
    //    this.state.obj.cs;            covid symptoms
    //    this.state.obj.cc;           covid contact

    }
    render(){
        if(this.state.page===0){
            var form = <Reservation pageChange={()=>this.setState(state => ({page: state.page + 1}))} valuesAdd={(e)=>this.setState({obj: e})} />;
        }
        else {
            this.manipulateValues();
            var form= <br/>;
        }
        return(
            <Container className="mt-5 text-justify bg-dark text-light">
                {form}
            </Container>
        );
    }
}
export default Main;