import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  //State (Estado): Quando a variável tem seu conteúdo modificado a página é rederizada novamente
  //hook
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId == task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask);
  }

  return (
    <div className="app">
      <div className="principal">
        <h1 className="titulo">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        {tasks.length !== 0 ? (
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
