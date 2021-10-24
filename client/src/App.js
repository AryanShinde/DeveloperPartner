import React,{useEffect} from "react";
import './App.css';
import "./styles/app.scss"
import "./pages/LandingPage";
import Nav from "./components/Nav";
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import SignUp from './pages/Signup';
import Alert from './components/alert';

import { loadUser } from './actions/auth';

//router
import {Route, Switch} from "react-router-dom";
import PrivateRouter from "./routing/PrivateRouter";

import { useDispatch } from "react-redux";
import {setToken} from "./utils/setToken";
import Dasboard from "./components/Dasboard";
import CreateProfilePage from "./pages/CreateProfile";
import EditProfile from "./components/EditProfile";
import AddExperience from "./components/AddExperience";
import AddEducation from "./components/AddEducation";

if(localStorage.token){
  setToken(localStorage.token);
}

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  return (
    <div className="App">
        <Nav/>
        <Route exact path="/" component={LandingPage} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp} />
            <PrivateRouter exact path="/dashboard" component={Dasboard} />
            <PrivateRouter exact path="/create-profile" component={CreateProfilePage}/>
            <PrivateRouter exact path="/edit-profile" component={EditProfile} />
            <PrivateRouter exact path="/add-experience" component={AddExperience}/>
            <PrivateRouter exact path="/add-education" component={AddEducation}/>
          </Switch>
        </section>
    </div>
  );
}

export default App;
