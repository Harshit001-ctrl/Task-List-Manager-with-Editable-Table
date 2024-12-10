import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
} from "@mui/material";
import PropTypes from "prop-types";
import { Button } from "../components/ui/button";

const TaskTable = ({ tasks, onDelete, onUpdate }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEditChange = (taskId, field, value) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (!updatedTask) return;

    updatedTask[field] = value;
    onUpdate(updatedTask);

    toast.success("Task updated successfully!");
  };

  const handleEditClick = (taskId) => {
    setEditingTask(taskId);
  };

  const handleDeleteClick = (taskId) => {
    onDelete(taskId);
    toast.success("Task deleted successfully!");
  };

  return (
    <div>
      <Table className="w-full mt-6 bg-white border border-gray-300 shadow-md">
        <TableHead>
          <TableRow>
            <TableCell>Task ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>
                {editingTask === task.id ? (
                  <Input
                    value={task.title}
                    onChange={(e) =>
                      handleEditChange(task.id, "title", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  task.title
                )}
              </TableCell>
              <TableCell>
                {editingTask === task.id ? (
                  <Input
                    value={task.description}
                    onChange={(e) =>
                      handleEditChange(task.id, "description", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  task.description
                )}
              </TableCell>
              <TableCell>
                {editingTask === task.id ? (
                  <Input
                    value={task.status}
                    onChange={(e) =>
                      handleEditChange(task.id, "status", e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  task.status
                )}
              </TableCell>
              <TableCell>
                {editingTask === task.id ? (
                  <Button
                    onClick={() => setEditingTask(null)}
                    className="bg-green-600 text-white py-2 px-4 rounded-md"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEditClick(task.id)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md"
                  >
                    Edit
                  </Button>
                )}
                <Button
                  onClick={() => handleDeleteClick(task.id)}
                  className="ml-2 bg-red-600 text-white py-2 px-4 rounded-md"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TaskTable;
