import React from "react" 
import Reservation from "./Form";
import { Container } from "reactstrap";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message:"",
          name: ""
        }
    }
    render(){
        if(1){
            var form = <Reservation />;
        }
        return(
            <Container className="mt-5 text-center">
                {form}
            </Container>
        )
    }
}
export default Main;