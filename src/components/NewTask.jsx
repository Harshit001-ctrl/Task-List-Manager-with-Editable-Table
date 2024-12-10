import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description, status };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Title</label>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Description</label>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Status</label>
        <TextField
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Add Task
      </Button>
    </form>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
