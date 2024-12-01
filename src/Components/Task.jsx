import React from "react";

const Task = ({ id, taskName, isCompleted }) => {
  return (
    <div className="task-item flex items-center bg-gray-700 rounded-lg px-4 py-2 shadow-md justify-evenly">
      <input
        type="checkbox"
        className="w-5 h-5 text-purple-500 focus:ring-0 cursor-pointer"
      />
      <input
        type="text"
        value={taskName}
        readOnly={isCompleted}
        className="flex-1 ml-4 bg-transparent text-white text-lg border-none outline-none cursor-default"
      />
      <button className="text-blue-400 hover:text-blue-300 mx-2 text-sm font-medium cursor-pointer">
        Edit
      </button>
      <button className="text-red-400 hover:text-red-300 text-sm font-medium cursor-pointer">
        Delete
      </button>
    </div>
  );
};

export default Task;
