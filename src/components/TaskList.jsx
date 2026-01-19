import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTodo } from "../features/taskSlice";
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  if (loading) {
    return <p>Tasks Loading...</p>;
  }

  if (error) {
    return <p>There is an error- {error}</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2 className="text-xl">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-medium text-gray-800">{task.title}</p>
              {task.description && (
                <p className="text-gray-600">{task.description}</p>
              )}
              <p className="text-sm mt-1 font-semibold text-amber-500">
                Status : <span className="italic underline">{task.status}</span>
              </p>
            </div>
            <div className="flex space-x-2">
              <EditTask task={task} />

              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
