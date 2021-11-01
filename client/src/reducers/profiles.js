const initialState={
    profile:null,
    profiles:[],
    repos:[],
    isLoading:true,
    errors:{}
};

const profiles=(state=initialState,action)=>{

    switch(action.type){
        case "GET_PROFILE":
        case "UPDATE_PROFILE":
            return{
                ...state,
                profile:action.payload,
                isLoading:false,
            }
        case "GET_PROFILES":
            return {
                ...state,
                profiles:action.payload,
                isLoading:false
            }
        case "PROFILE_ERROR":
            return{
                ...state,
                errors:action.payload,
                isLoading:false
            }
        case "LOGOUT":
            
            return {
                ...state,
                profile:null,
                profiles:[],
                repos:[],
                isLoading:true,
                errors:{}
            }
        default:
            return state;
    }

}

export default profiles;