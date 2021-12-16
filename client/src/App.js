import React, { useEffect } from "react";
import "./App.css";
import "./styles/app.scss";
import "./pages/LandingPage";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Alert from "./components/alert";

import { loadUser } from "./actions/auth";

//router
import { Route, Switch } from "react-router-dom";
import PrivateRouter from "./routing/PrivateRouter";

import { useDispatch } from "react-redux";
import { setToken } from "./utils/setToken";
import Dasboard from "./components/Dasboard";
import CreateProfilePage from "./pages/CreateProfile";
import EditProfile from "./components/EditProfile";
import AddExperience from "./components/AddExperience";
import AddEducation from "./components/AddEducation";
import Profiles from "./pages/Profiles";
import GuestProfile from "./pages/GuestProfile";
import Post from "./pages/Post";
import SinglePost from "./components/SinglePost";
import LeftAside from "./components/LeftAside";

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <div className="main">
        <div className="left-aside">
          <LeftAside />
        </div>
        <section className="right">
          <Alert />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:id" component={GuestProfile} />
            <PrivateRouter exact path="/dashboard" component={Dasboard} />
            <PrivateRouter
              exact
              path="/create-profile"
              component={CreateProfilePage}
            />
            <PrivateRouter exact path="/edit-profile" component={EditProfile} />
            <PrivateRouter
              exact
              path="/add-experience"
              component={AddExperience}
            />
            <PrivateRouter
              exact
              path="/add-education"
              component={AddEducation}
            />
            {/* <PrivateRouter exact path="/user" component={GuestProfile} /> */}
            <PrivateRouter exact path="/posts" component={Post} />
            <PrivateRouter exact path="/posts/:id" component={SinglePost} />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
