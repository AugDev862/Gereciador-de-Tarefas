function DetailsTask(task) {
  return (
    <div className="taskDetails">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default DetailsTask;
