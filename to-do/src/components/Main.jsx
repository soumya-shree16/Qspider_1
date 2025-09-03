import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/to do.webp";
import bgImage from "../assets/po.jpg";
import checkIcon from "../assets/or.png";
import uncheckIcon from "../assets/un.png";
import { toast } from "react-toastify";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const fetch = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/users");
      setTasks(data); // assuming data is an array
    } catch (error) {
      console.error("Failed to fetch tasks:", error.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  // Add todo
  const handleForm = async (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      toast.error("Please enter a task!");
      return;
    }
    try {
      await axios.post("http://localhost:3000/todo", {
        title: todo,
      });
      setTodo(""); // Clear input
      fetch(); // Refresh list
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete task
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  // Toggle done/undone
  const toggleDone = async (id, done) => {
    try {
      await axios.put(`http://localhost:3000/todo/${id}`, {
        done: !done,
      });
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-xl mx-auto mt-20 p-6 bg-pink-200 rounded-lg shadow-2xl">
        <h1 className="text-xl font-bold mb-4 flex items-center">
          To-Do List <img src={logo} alt="logo" className="w-8 ml-2" />
        </h1>
        <form onSubmit={handleForm}>
          <div className="flex bg-gray-200 rounded-full overflow-hidden mb-4">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a task"
              className="flex-1 px-4 py-2 bg-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 hover:bg-orange-600"
            >
              Add
            </button>
          </div>
        </form>

        <ul className="space-y-2">
          {tasks?.map((item) => (
            <li
              key={item.id}
              onClick={() => toggleDone(item.id, item.done)}
              className={`flex items-center justify-between bg-white px-4 py-2 rounded shadow ${
                item.done ? "line-through text-gray-400" : ""
              }`}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={item.done ? checkIcon : uncheckIcon}
                  alt="check"
                  className="w-6 h-6"
                />
                <span>{item.title}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(item.id);
                }}
                className="text-red-500 hover:text-black text-xl"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
