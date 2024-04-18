import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleCompleted,
} from "../features/todo/todoSlics";
// used to perform other actions like remove update,toggle
function Todos({ todo }) {

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  // const todos = useSelector((state) => state.todos);
  const [todoMsg, setTodoMsg] = useState(todo.text);  // we are getting todo.text for updation process

  const dispatch = useDispatch();
  const editTodo = () => {
    dispatch(updateTodo({ id: todo.id, text: todoMsg }));
    setIsTodoEditable(false);
  };
  const toggleComplete = () => {
    dispatch(toggleCompleted(todo.id));
    setTimeout(() => {
      dispatch(removeTodo(todo.id));
    },5000)

  };
  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todo.completed ? "bg-[#68b326]" : "bg-[#870be6]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        <input
          type="text"
          className={`border outline-none text-lg font-serif w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg} //getting old value of todo to do updation
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable} // when we are in edit mode it will be editable
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          ❌
        </button>
      </div>
    </>
  );
}
export default Todos;
