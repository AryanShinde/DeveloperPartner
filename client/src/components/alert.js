import React from "react";
import {v4 as uuid} from "uuid";
import styled from "styled-components";
import "../styles/app.scss";

import { useSelector } from "react-redux";

const Alert=()=>{
    const state=useSelector(store=>store.alert);
    return(
       state!==null && (state.map((s)=><AlertStyle className={state!==null ? "add-alert":"remove-alert"} key={uuid()} >{s.msg}</AlertStyle>))
    )
}
const AlertStyle=styled.div`
    transition: 8s ease; 

`
export default Alert;