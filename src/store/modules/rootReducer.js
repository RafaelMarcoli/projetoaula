import { combineReducers } from "redux";

import exampleReduce from "./example/reducer";

export default combineReducers({
  example: exampleReduce,
});
