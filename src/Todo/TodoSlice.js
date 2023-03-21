import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "Todo",
    initialState: {
        Todo_info: []
    },
    reducers: {
        // All logic 
        todoAdd(state, action) {
            console.log(action.payload)
            state.Todo_info.push(action.payload);
        },

        // delete data form state
        deletepost(state, action) {
            // console.log(action.payload)
            state.Todo_info = state.Todo_info.filter(e => e.id !== action.payload)
        },
        // update Todo
        updateTodo(state, action) {
            console.log(action.payload)
            const { id, name, email } = action.payload

            const existingId = state.Todo_info.find(e => e.id == id)

            if (existingId) {
                existingId.name = name
                existingId.email = email
            }
        }
    }

})
export const { todoAdd, deletepost, updateTodo } = TodoSlice.actions
export default TodoSlice.reducer