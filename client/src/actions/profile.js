import axios from "axios";
import SetAlert from "./setAlert";

const profile=()=>async (dispatch)=>{
    try{
    const data=await axios.get("/api/profiles/me");
    dispatch({
        type: "GET_PROFILE",
        payload: data.data
    })
    }
    catch(error){
        console.log(error.response);
        dispatch({
            type: "PROFILE_ERROR",
            payload:error.response
        })
    }
}

export const createProfile=(formData,history,edit=false)=> async (dispatch)=>{
    try {
        const config={
            headers:{
                "Content-type": "application/json"
            }
        }
        const body=JSON.stringify(formData);
        const res=await axios.post("api/profiles",body,config);
        dispatch({
            type: "GET_PROFILE",
            payload: res.data
        })
        dispatch(SetAlert(edit? "Profile edited successfully":"profile created"),"green")
        history.push("/dashboard");

    } catch (error) {
        console.log(error.response);
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
            type: "PROFILE_ERROR",
            payload:error.response
        })
    }
}


export default profile;