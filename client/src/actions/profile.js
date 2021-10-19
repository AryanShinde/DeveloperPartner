import axios from "axios";

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
        console.log(error.response);
    }
}
export default profile;