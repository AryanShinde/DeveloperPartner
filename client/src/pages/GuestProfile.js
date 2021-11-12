import React,{useEffect} from "react";
import { getProfiles, guestProfile } from "../actions/profile";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const GuestProfile=()=>{
    const dispatch=useDispatch();
    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const profiles=useSelector(store=>store.profiles);
    const user=useSelector(store=>store.auth);
    useEffect(()=>{
        dispatch(guestProfile(path));
    },[dispatch,path])
    return (
        <>
        { (profiles.isLoading || user.isAuthenticated===false || user.isLoading) || profiles.profile===null ? (<Loading/>) : 
        (<>
        {console.log(profiles)}
        <h2>Hello there</h2>
        <Link to="/profiles">Go back to Browsing</Link>
        {user.user._id===profiles.profile.user._id && !profiles.isLoading && (<Link to="/edit-profile">Edit your Profile</Link>) }
        </>)
        }
       
        </>
    )
}
export default GuestProfile;