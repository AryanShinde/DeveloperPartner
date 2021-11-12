import React from "react";
import styled from "styled-components";
import {MdOutlineDoneOutline} from "react-icons/md";
import { Link } from "react-router-dom";
const ProfileItem=(props)=>{
    console.log(props.data);
    return(
        <Profile>
            <div className="avatar"><img src={props.data.user.avatar} alt="" /></div>
        
            <div className="name">
            <div className="name"><h3>{props.data.user.name}</h3></div>
            <div className="status"><h4>{props.data.status} {props.data.company && `at ${props.data.company}`}</h4></div>
            <Link to={`/profile/${props.data.user._id}`}>view Profile</Link>
            </div>
            <div className="details">
            <div className="skills">{props.data.skills.slice(0,4).map((skill)=> <div className="skill"><MdOutlineDoneOutline/> <p>{skill}</p></div>)}</div>
            </div>
        </Profile>
    )
}
const Profile=styled.div`
background-color: #EEEFF7;
max-width:80%;
width:70%;
max-height: 40rem;
height:20rem auto ;
display: flex;
flex-wrap: wrap;
align-items: center;
padding: 1rem;
margin:2rem 2rem 2rem 0rem;
border-radius:1rem ;
border-bottom:8px solid #6470C4;
@media (max-width:700px){
    max-width: 100%;
    width:80%;
    height: 80%;
    margin: 2;
    margin-left: 4rem;
}
.avatar img{
    border-radius:50%;
    width:80%;
    height: 80%;
}
.name{
    display:flex;
    justify-content: center;
    *{
        margin:0.4rem;
    }
    align-items: flex-start;
    flex-direction: column;
    margin: 0rem 1rem 0rem 0rem;
    a{
        text-decoration: none;
        color:#6470C4;
        border: 2px solid #6470C4;
        border-radius:0%.4rem;
        padding: 0.4rem;
        transition: 0.4s ease;
        &:hover{
            background-color: #6470C4;
            color:white;
        }
    }
}
.skills{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:column;
    .skill{
        display: flex;
        justify-content: center;
        align-items: center;
        *{
            margin:0.4rem;
        }
    }
    
}
`
export default ProfileItem;