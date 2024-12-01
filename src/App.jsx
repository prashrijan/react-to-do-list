import "./App.css";
import "./index.css";
import Task from "./Components/Task";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "Task 1",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div className="wrapper w-100 overflow-x-hidden h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col py-20 items-center gap-8">
        <h2 className="text-3xl font-bold text-white shadow-lg">
          React To-Do List
        </h2>

        <div className="input-container flex items-center bg-gray-700 rounded-full shadow-md">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 p-4 text-white text-lg bg-transparent border-none outline-none placeholder-gray-400"
          />

          <button
            type="button"
            className="ml-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-full text-lg font-semibold cursor-pointer shadow-lg transform hover:scale-105 hover:from-purple-500 hover:to-blue-400 transition duration-300 text-nowrap"
          >
            + Add Task
          </button>
        </div>

        <div className="task-container w-fulll max-w-xl bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col gap-4">
          {/* Placeholder Task */}

          {console.log(tasks)}
          {tasks.length !== 0 ? (
            tasks.map((data) => {
              return (
                <Task
                  taskName={data.taskName}
                  id={data.id}
                  isCompleted={data.isCompleted}
                />
              );
            })
          ) : (
            <p className="text-white text-center italic opacity-50">
              Add a task to see it here!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
