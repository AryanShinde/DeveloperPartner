import './App.css';
import "./styles/app.scss"
import "./pages/LandingPage";
import Nav from "./components/Nav";
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import SignUp from './pages/Signup';
import Alert from './components/alert';

//router
import {Route, Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Nav/>
        <Route exact path="/" component={LandingPage} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp} />
          </Switch>
        </section>
    </div>
  );
}

export default App;
