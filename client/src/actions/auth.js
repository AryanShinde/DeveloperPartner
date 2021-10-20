import axios from "axios";
import SetAlert from "./setAlert";
import {setToken} from "../utils/setToken";
export const loadUser=()=> async (dispatch)=>{
    if(localStorage.getItem("token")){
    setToken(localStorage.token);
    }
    else{
        dispatch({
            type: "AUTH_ERROR"
        })
    }
    try {
        const res=await axios.get("/api/auth");
        if(res.data.mg==="authorization denied"){
            dispatch({
                type:"AUTH_ERROR"
            })
        }
        else{
        dispatch({
            type: "USER_LOADED",
            payload:res.data
        })
    }
    } catch (error) {
        console.log(error);
        dispatch({
            type:"AUTH_ERROR"
        })
    }

}




const registerUser=({name,email,password})=>async (dispatch)=>{
    const config={
        headers:{
            "content-type": "application/json"
        }
    }

    const body=JSON.stringify({name,email,password});
    try{
    const res=await axios.post("/api/user",body,config);
    localStorage.setItem("token",res.data.token);
    dispatch({
        type: "REGISTRATION_DONE",
        payload: res
    })
    dispatch(loadUser());
    }
    catch(error){
        const errors=error.response.data.errors;
        if(errors){
        errors.forEach((e)=>dispatch(SetAlert(e.msg,"danger")));
        }
        else if(error){
        dispatch(SetAlert(error.response.data.error,"danger"));
        }
        dispatch({
            type:"REGISTRATION_ERROR"
        })
    }
}

export const loginUser=({email,password})=>async (dispatch)=>{
    const config={
        headers:{
            "content-type": "application/json"
        }
    }

    const body=JSON.stringify({email,password});
    try{
    const res=await axios.post("/api/auth",body,config);
    localStorage.setItem("token",res.data.token);
    dispatch({
        type: "LOGIN_DONE",
        payload: res
    })
    dispatch(loadUser());
    }
    catch(error){
        const errors=error.response.data.errors;
        if(errors){
        errors.forEach((e)=>dispatch(SetAlert(e.msg,"danger")));
        }
        else if(error.response.data.error){
        dispatch(SetAlert(error.response.data.error,"danger"));
        }else if(error.response.data.msg && !Array.isArray(error.response.data.msg)){
            dispatch(SetAlert(error.response.data.msg,"danger"));
        }
        dispatch({
            type:"LOGIN_ERROR"
        })
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({
        type:"LOGOUT",
    })
} 

export default registerUser;