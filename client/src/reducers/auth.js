const initialState={
    token:localStorage.getItem("token"),
    isAuthenticated:false,
    isLoading:true,
    user:null
}

const auth=(state=initialState,action)=>{
    switch(action.type){
        case "USER_LOADED":
            return{
                ...state,
                user:action.payload,
                isAuthenticated:true,
                isLoading:false,
            }

        case "REGISTRATION_DONE":
        case "LOGIN_DONE":
            return {
                ...state,
                token:action.payload.data.token,
                isLoading:false
            }
        case "REGISTRATION_ERROR":
        case "LOGIN_ERROR":
        case "AUTH_ERROR":
        case "LOGOUT":
        case "DELETE_PROFILE":
        localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                isLoading:false,
                user: null
            }
        default:
            return state;
    }
}
export default auth;