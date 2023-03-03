import { legacy_createStore } from "redux"
import reducer from "./reducer.ts"

legacy_createStore(reducer);
export default reducer