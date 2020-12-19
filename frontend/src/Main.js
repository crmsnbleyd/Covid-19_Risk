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
    render(){
        if(this.state.page===0){
            var form = <Reservation pageChange={()=>this.setState(state => ({page: state.page + 1}))} jsonAdd={(e)=>this.setState({obj: e})} />;
        }
        else {
            // var form = <Result />;
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