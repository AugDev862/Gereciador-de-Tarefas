import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
//Componentesrecebem props
function Tasks(props) {
  const navigate = useNavigate();

  function onClickTaskDeatils(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  console.log(props);
  return (
    <ul className="tasks">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`task ${task.isCompleted && "line-through"}`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <button
            className="editarTask"
            onClick={() => onClickTaskDeatils(task)}
          >
            <ChevronRightIcon />
          </button>

          <button
            className="editarTask"
            onClick={() => props.onDeleteTaskClick(task.id)}
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
