import { combineReducers } from "redux";
import { alert } from "./alert";
import auth from "./auth";
import profiles from "./profiles";

const rootReducer=combineReducers({
    alert,
    auth,
    profiles
});

export default rootReducer;