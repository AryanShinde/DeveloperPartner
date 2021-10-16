import {v4 as uuid} from "uuid";

const SetAlert=(msg,alertType)=>(dispatch)=>{
    const id=uuid();
    dispatch({
        type: "SET_ALERT",
        payload: {
            id,
            msg,
            alertType
        }
    });

    setTimeout(()=>{
        dispatch({
            type:"REMOVE_ALERT",
            payload:{
            id,
            msg,
            alertType
            }
        });
    },2000)
}

export default SetAlert;