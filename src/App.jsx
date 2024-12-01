import { useState } from "react";
import "./App.css";
import "./index.css";
import Task from "./Components/Task";

function App() {
  return (
    <>
      <div className="wrapper h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col py-20 items-center gap-8">
        <h2 className="text-3xl font-bold text-white shadow-lg">
          React To-Do List
        </h2>

        <div className="input-container flex items-center bg-gray-700 rounded-full px-5 py-2 shadow-md">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-2 text-white text-lg bg-transparent border-none outline-none placeholder-gray-400"
          />
          <button
            type="button"
            className="ml-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full text-lg font-semibold cursor-pointer shadow-lg transform hover:scale-105 hover:from-purple-500 hover:to-blue-400 transition duration-300"
          >
            + Add Task
          </button>
        </div>

        <div className="task-container w-3/4 max-w-xl bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col gap-4">
          {/* Placeholder Task */}
          <Task />
          <Task />
          <Task />
          <p className="text-white text-center italic opacity-50">
            Add a task to see it here!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
