import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../Todo/TodoSlice'
const Store = configureStore({
    reducer: {
        // All reducers 
        Todo: TodoReducer,
    }
})

export default Store;