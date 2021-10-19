import React from "react";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import profile from "../actions/profile";

const Dashboard=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(profile());
    },[dispatch])
    return(
        <div>Dashboard</div>
    )
}
export default Dashboard;