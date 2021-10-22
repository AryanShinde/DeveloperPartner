import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import { useDispatch,useSelector } from "react-redux";
import profile from "../actions/profile";
import Loading from "./Loading";
import {Link} from "react-router-dom";

//icons
import {ImUser} from "react-icons/im";

const Dashboard=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(profile());
    },[dispatch])

    const isAuthenticated=useSelector((store)=>store.auth.isAuthenticated);
    const user=useSelector((store)=>store.auth.user);
    const userProfile=useSelector(store=>store.profiles.profile);

    
    const NoProfile=(
        <div className="NoProfile">
            <h4>you do not have a profile yet</h4>
            <Link to="/create-profile">Create Profile</Link>
        </div>
    );
    const Profile=(
        <div className="Profile">
            <h4>You Have a Profile!</h4>
        </div>
    )

    return(
        <>
        {!isAuthenticated ? <Loading/>:
         <DashboardStyle>
                <h1>Dashboard</h1>
                <div className="line"></div>
                <div className="username">
                <ImUser className="user"/> 
                <p> welcome, {user.name}</p>
                </div>
                <div className="desc">
                    <p>{userProfile===null ? NoProfile : Profile}</p>
                </div>
         </DashboardStyle>
        }
        </>
    )
}

const DashboardStyle=styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
.line{
    margin-bottom: 0.4rem;
    background-color: #4c4c78;
    width:40rem;
    height: 0.4rem;
    border-radius: 0rem 0rem 1rem 1rem;
}
.user{
    font-size:2rem;
    margin: 0rem 0.4rem 0rem 0rem;
}
h1{
    margin: 2rem 0rem 1rem 0rem;
    color:#4c4c78;
}
.username{
    margin:0.4rem 0rem ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.desc{
    h4{
    margin:1rem 0rem 2rem 0rem;
    }

    a{
    border: 2px solid #6470c4;
    padding: 0.4rem;
    text-decoration: none;
    border-radius: 0rem 0rem 1rem 1rem;
    transition: 0.4s;
    color:#6470c4;
    &:hover{
        background-color: #6470c4;
        border-radius: 1rem 1rem 1rem 1rem;
        color:white;
    }
}
}

`

export default Dashboard;