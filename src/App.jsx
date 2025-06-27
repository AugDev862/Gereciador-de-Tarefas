import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react";
function App() {
  //State (Estado): Quando a variável tem seu conteúdo modificado a página é rederizada novamente
  //hook
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tittle: "Estudar programação",
      description:
        "Esudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      tittle: "Estudar matemática",
      description:
        "Esudar matemática para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 3,
      tittle: "Estudar inglês",
      description: "Esudar inglês para se tornar fluente",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId == task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <div style={{ width: "50%" }}>
        <h1 className="titulo">Gerenciador de Tarefas</h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
