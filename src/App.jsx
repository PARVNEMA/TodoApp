
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { useSelector } from 'react-redux'

// we are storing data in the store for which we are using redux toolkit
function App() {
  // useSelecctor is used to get data from store
 const todos= useSelector(state=>state.todos)
  return (
    <>
    <div className="bg-[#101e34] min-h-screen py-8 border
    rounded  border-gray-700 hover:border-indigo-700 hover:ring-2 hover:ring-indigo-600 *: outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out
    ">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
         {/* we have  made an seprate component to add todo */}
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">

          {/* this part is to traverse the todos which are stored in our store which we are using useSelector to get Data  From */}
          {todos.map(todo => {
            // console.log(todo)
            return <div key={todo.id} className='w-full'>
              <Todos todo={todo} />
            </div>
          })}
        </div>
      </div>
    </div>
  </>
  )
}

export default App
