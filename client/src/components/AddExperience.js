import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router"
import { addExperience } from "../actions/profile";
import styled from "styled-components";

const AddExperience=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    const [check,setCheck]=useState(false);
    const [formData,setFormData]=useState({
        title:"",
        company:"",
        location:"",
        from:"",
        to:"",
        current:false,
        description:""
    })
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }=formData;

    const onChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        dispatch(addExperience(formData,history));

    }


    return(
        <Experience>
            <div className="add-experience">
                <h1>
                    Add Experience
                </h1>
                <div className="line"></div>
            </div>
            <form onSubmit={(e)=>onSubmit(e)} type="submit">
            <div className="form-group title">
                <input name="title" value={title} onChange={(e)=>onChange(e)} type="text"  />
                <small>title of your experience</small>
            </div>
            <div className="form-group company">
                <input onChange={(e)=>onChange(e)} name="company" value={company} type="text" />
                <small>Name of the Company</small>
            </div>
            <div className="form-group location">
                <input onChange={(e)=>onChange(e)} name="location" value={location} type="text" />
                <small>Location</small>
            </div>
            <div className="form-group from">
                <input onChange={(e)=>onChange(e)} name="from" value={from} type="date" />
                <small>Starting date</small>
            </div>
            <div className="form-group current">
            <label className="current" htmlFor="current">Currently Working?
                <input  onClick={()=>{
                    setCheck(!check);
                    setFormData({...formData,current:!check})
                }} id="current" name="current" value={current} type="checkbox" />
            </label>

            </div>
            <div className="form-group to">
                <input onChange={(e)=>onChange(e)} id="to" disabled={check ? "disabled":""} name="to" value={to} type="date" />
                <small>To date</small>
            </div>
            <div className="form-group desc">
                <input onChange={(e)=>onChange(e)} name="description" value={description} type="text" />
                <small>Give a little description about your experience</small>
            </div>
            <button type="submit">Add Experience</button>
            </form>
        </Experience>
    );
}

const Experience=styled.div`
    h1{
  color: #4c4c78;
  margin-bottom: 1rem;
}
.line{
    margin-bottom: 0.4rem;
    background-color: #4c4c78;
    width:40rem;
    height: 0.4rem;
    border-radius: 0rem 0rem 1rem 1rem;
}
    margin-top: 2rem;
    .form-group{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin: 1rem 0rem;
    }
    input,select,textarea{
        margin-bottom: 0.4rem;
        padding: 0.3rem;
        font-size: 1rem;
        border-radius:0.3rem;
        border: 2px solid #6470c4;
        width: 60%;

    }
    button{
      width:auto;
      padding:0.4rem;
      color:white;
      background-color: #6470c4;
      margin: 0.2rem;
      border:none;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 0%.3rem;
    }
    .social-input{
      display: flex;
     justify-content: flex-start;
     align-items: center;
      flex-direction: row;
      
      .icons{
        font-size: 2rem;
        margin: 1rem;
      }
    }
    a{
      text-decoration: none;
      border-radius: 0%.2rem;
      border: 2px solid #6470c4;
      color: #6470c4;
      padding: 0.3rem;
    }
    .current{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        input{
            height: 1.2rem;
        }
    }
`
export default AddExperience;