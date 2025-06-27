import { ChevronRightIcon, DeleteIcon } from "lucide-react";
//Componentesrecebem props
function Tasks(props) {
  console.log(props);
  return (
    <ul className="tasks">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`task ${task.isCompleted && "line-through"}`}
          >
            {task.tittle}
          </button>

          <button className="editarTask">
            <ChevronRightIcon />
          </button>

          <button
            className="editarTask"
            onClick={() => props.onDeleteClick(task.id)}
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
