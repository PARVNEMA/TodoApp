import { configureStore } from "@reduxjs/toolkit";
import todoReducer from'../features/todo/todoSlics'
export const store=configureStore({
    reducer:todoReducer
})