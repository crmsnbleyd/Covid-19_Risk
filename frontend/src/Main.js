import React from "react" 
import Reservation from "./Form";
import { Container, NavbarText } from "reactstrap";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          name: ""
        }
    }
    render(){
        if(this.state.page==0){
            var form = <Reservation />;
        }
        else {
            var form = <br />;
        }
        return(
            <Container className="mt-5 text-justify bg-dark text-light">
                {form}
                <button onClick={()=>this.setState(state => ({page: state.page + 1}))}>
                    Next {this.state.page}
                </button>
            </Container>
        );
    }
}
export default Main;