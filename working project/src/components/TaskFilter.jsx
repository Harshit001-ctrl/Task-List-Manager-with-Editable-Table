import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import PropTypes from 'prop-types';

const TaskFilter = ({ filterStatus, setFilterStatus }) => {
  const handleChange = (value) => setFilterStatus(value);

  return (
    <div className="mb-6">
      <label htmlFor="filterStatus" className="block text-gray-700">Filter by Status:</label>
      <Select value={filterStatus} onValueChange={handleChange}>
        <SelectTrigger className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="To Do">To Do</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Done">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

TaskFilter.propTypes = {
  filterStatus: PropTypes.string.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
};

export default TaskFilter;
