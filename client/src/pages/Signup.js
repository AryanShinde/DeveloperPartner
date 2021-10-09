import React, {useState} from "react";
import styled from "styled-components";


const SignUp=()=>{

    const [formData,setFormData]=useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })
    const inputHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(formData.password!==formData.password2){
            return console.log("password did not match")
        }
        console.log(formData);
    }

    return (
        <SignUpStyle>
            <form onSubmit={e=>submitHandler(e)}>
                <h2>Sign up</h2>
                <h4>Create an account</h4>
                <div className="name">
                    <input onChange={(e)=>inputHandler(e)} type="text" placeholder="Name" id="name" name="name" required/>
                </div>
                <div className="email">
                    <input onChange={(e)=>inputHandler(e)} type="email" placeholder="email" id="email" name="email" required/>
                </div>
                <div className="password">
                    <input onChange={(e)=>inputHandler(e)} type="password" placeholder="password" id="password" name="password" required/>
                </div>
                <div className="password2">
                    <input onChange={(e)=>inputHandler(e)} type="password" placeholder="Confirm Password" id="password2" name="password2" required/>
                </div>
                <div className="submit">
                    <button onChange={(e)=>inputHandler(e)} type="submit">Sign Up</button>
                </div>
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
    }
    margin:1rem;
}
h2{
    color: #6470C4;
    padding: 0.4rem;
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

`
export default SignUp;