import { combineReducers } from "redux"
import info from "./info"

const createRootReducer = () =>
  combineReducers({
    info,
  })

export default createRootReducer
