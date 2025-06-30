import { ChevronRightIcon, Trash2 } from "lucide-react";
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
            {task.title}
          </button>

          <button className="editarTask">
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
