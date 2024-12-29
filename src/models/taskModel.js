const db = require("../config/db");

const getAllTask = async () => {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
};

const addTaskModel = async (task) => {
  const { title, description, status, due_date } = task;
  const query =
    "INSERT INTO tasks (title, description, status, due_date) VALUES (?, ?, ?, ?)";
  const [result] = await db.query(query, [
    title,
    description,
    status,
    due_date,
  ]);
  return result;
};

const deleteTaskModel = async (taskId) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  const [result] = await db.query(query, [taskId]);
  return result;
};

const updateTaskModel = async (taskId, task) => {
    const { title, description, status, due_date } = task;
    const query =
        "UPDATE tasks SET title = ?, description = ?, status = ?, due_date = ? WHERE id = ?";
    const [result] = await db.query(query, [
        title,
        description,
        status,
        due_date,
        taskId,
    ]);
    return result;
}

module.exports = { getAllTask, addTaskModel, deleteTaskModel, updateTaskModel };
