import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfiles } from "../actions/profile";
import GetProfiles from "../components/Profiles";


const Profiles=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProfiles())
    },[dispatch])
    return(
        <>
        <GetProfiles/>
        </>
    )
}
export default Profiles;