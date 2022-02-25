import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer, applyMiddleware(createLogger()));

export default store; //kho chung
// có 4 hành động
// 1 - store
// 2 - rootReducer
// 3 - action
// 4 - dispatch
// nguyên lý của redux: 
