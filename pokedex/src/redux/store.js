import {configureStore} from "@reduxjs/toolkit"
import pokeReducer from "./Reducer"

export default configureStore({reducer:pokeReducer})