import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <div className="addTask">
      <input
        className="addTaskInput"
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="addTaskInput"
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="addTaskButton"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa");
          }
          onAddTaskSubmit(title, description);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
