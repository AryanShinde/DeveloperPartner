import React from "react";
import { useSelector } from "react-redux";

import {Route,Redirect} from "react-router-dom";

const PrivateRouter=({component: Component,path,...rest})=>{
    const auth=useSelector(store=>store.auth);
    return <Route path={path} {...rest} render={(props)=>  auth.isAuthenticated ?  <Component {...props} /> : <Redirect to="/login"/> } />
}
export default PrivateRouter;