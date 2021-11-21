import { combineReducers } from "redux";
import { alert } from "./alert";
import auth from "./auth";
import profiles from "./profiles";
import post from "./post";

const rootReducer = combineReducers({
  alert,
  auth,
  profiles,
  post,
});

export default rootReducer;
