
// we are using redux toolkit which majorly is divided into two parts
// 1.store-it is where all the state data are stored
// 2.slice  it is divided into 2 parts a.reducer and b.action
// reducer are the function which are used to update the data stored in the store
// actions are an object that triggers the reducer and tells reducer on how to change state
import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is used to generate unique id
const initialState = {
  todos: [{ id: nanoid(), text: "hello world",completed:false }],
};
// general syntax
// name,initialstate(kinda blueprint of structure of data),reducers

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // each reducer takes two parameters state:-give current state valus,action:-to give values to perfrom action
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
        state.todos = state.todos.map((todo) =>{
      if(  todo.id === action.payload) {return{...todo,text:action.payload.text}}
      return todo
        })
    },
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } // ... spreads the other value and we are only changing completed
        return todo;
      });
    }
  },
});
//we export reducers whole and sepratly both we export sepratly to acess them in other parts
export const { addTodo, removeTodo, updateTodo, toggleCompleted} = todoSlice.actions;

export default todoSlice.reducer;
