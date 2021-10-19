import React from "react";
import { useSelector } from "react-redux";

import {Route,Redirect} from "react-router-dom";

const PrivateRouter=({component: Component,...rest})=>{
    const auth=useSelector(store=>store.auth);
    return <Route {...rest} render={(props)=>auth.isAuthenticated && !auth.isLoading ?  <Component {...props} /> : <Redirect to="/login"/> } />
}
export default PrivateRouter;