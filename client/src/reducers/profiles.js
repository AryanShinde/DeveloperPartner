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
            return{
                ...state,
                profile:action.payload,
                isLoading:false,
            }
        case "PROFILE_ERROR":
            return{
                ...state,
                errors:action.payload
            }
        default:
            return state;
    }

}

export default profiles;