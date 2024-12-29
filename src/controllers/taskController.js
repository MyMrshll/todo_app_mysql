const {getAllTask, addTaskModel, deleteTaskModel, updateTaskModel} = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  const tasks = await getAllTask();
  if(tasks.length === 0) {
    return res.status(404).json({ message: "No tasks found" });
  }
  res.status(200).json({ tasks });
};

const addTask = async (req, res) => {
  const task = req.body;
  if (!task.title || !task.description || !task.status || !task.due_date) {
    return res.status(400).json({ message: "All fields are required" });
}
  const result = await addTaskModel(task);
  res.status(201).json({ message: "Task added successfully", result});
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const result = await deleteTaskModel(taskId);
  res.status(200).json({ message: "Task deleted successfully", result });
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const task = req.body;
  const result = await updateTaskModel(taskId, task);
  res.status(200).json({ message: "Task updated successfully", result });
}
module.exports = { getAllTasks ,addTask, deleteTask, updateTask };
