import logo from './img/Logo.png';
import {Jumbotron} from 'reactstrap'
import "./Background.css";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <img src={logo}></img>
      </Jumbotron>
    </div>
  );
}

export default App;
