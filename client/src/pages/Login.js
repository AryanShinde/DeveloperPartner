import React, {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../actions/auth";

import { Link,Redirect } from "react-router-dom";
import Loading from "../components/Loading";

const Login=()=>{

    const dispatch=useDispatch();
    const isAuthenticated=useSelector(store=>store.auth.isAuthenticated);
    const isLoading=useSelector((store)=>store.auth.isLoading);
   


    const [formData,setFormData]=useState({
        email: "",
        password: "",
    })
    const inputHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        
    }
    const {email,password}=formData;
    const submitHandler= async (e)=>{
        e.preventDefault();
        dispatch(loginUser({email,password}));
    }

    if(isAuthenticated){
        return <Redirect to="/dashboard" />  
    }else if(isLoading){
        return <Loading/>
    }
    return (
        <SignUpStyle>
            <form onSubmit={e=>submitHandler(e)}>
                <h2>Login</h2>
                <h4>Login to your account</h4>
                
                <div className="email">
                    <input onChange={(e)=>inputHandler(e)} type="email" placeholder="email" id="email" name="email" required/>
                </div>
                <div className="password">
                    <input onChange={(e)=>inputHandler(e)} type="password" placeholder="password" id="password" name="password" required/>
                </div>
               
                <div className="submit">
                    <button onChange={(e)=>inputHandler(e)} type="submit">Login</button>
                </div>
                <h4>Don't have an account? <span><Link to="/signup">Sign up</Link></span></h4>
            </form>
        </SignUpStyle>
    )
}
const SignUpStyle=styled.div`
width:40%;
margin: auto;
position: absolute;
top:55%;
left:50%;
transform: translate(-50%,-50%);
background-color: #EEEFF7;
border-bottom: 8px solid #6470C4;
padding: 2rem;
border-radius: 1rem;
@media screen and (max-width:680px){
    width: 80%;
}
.name,.email,.password,.password2{
    input{
        padding: 0.4rem;
        border-radius: 0.4rem;
        border: none;
        box-shadow: 1px 1px 2px #6470C4;
    }
    margin:1rem;
}
h2{
    color: #6470C4;
}
button{
    background-color: #6470C4;
    color: white;
    padding: 0.4rem;
    font-size: 15px;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    width:12rem;
}
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h4{
        margin: 1rem;
        span a{
            text-decoration: none;
            color: #6470C4;
        }
    }

`
export default Login;