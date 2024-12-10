import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskTable from "./components/TaskTable";
import NewTask from "./components/NewTask";
import TaskFilter from "./components/TaskFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const API = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        const filteredTasks = response.data.slice(0, 20).map((task) => ({
          id: task.id,
          title: task.title,
          description: "N/A",
          status: task.completed ? "Done" : "To Do",
        }));
        setTasks(filteredTasks);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    toast.success("Task added successfully!");
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.success("Task deleted successfully!");
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    toast.success("Task updated successfully!");
  };

  const filteredTasks = tasks.filter((task) =>
    filterStatus === "All" ? true : task.status === filterStatus
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Task Manager
      </h1>
      <NewTask onAddTask={handleAddTask} />
      <TaskFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <TaskTable
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />

      <ToastContainer />
    </div>
  );
};

export default App;
