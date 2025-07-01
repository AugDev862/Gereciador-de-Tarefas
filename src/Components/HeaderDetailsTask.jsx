import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HeaderDetailsTask() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <button className="returnApp" onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
      </button>
      <h1 className="tituloTask">Detalhes Da Tarefa</h1>
    </div>
  );
}

export default HeaderDetailsTask;
