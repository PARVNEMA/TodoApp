import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlics';
// use dispatch hook is used to dispatch or change values of state in store
function AddTodo() {
    const[input,setInput]=React.useState('')

    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        // after adding todo emptying the input field
        setInput('');
    }
    return (
        <form onSubmit={addTodoHandler} className="md:space-x-5 md:mt-12 ">
        <input
          type="text"
          className="bg-gray-800 rounded  focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ...  "
          value={input}
          //setting the usestae value with the value of input
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    )
}

export default AddTodo

