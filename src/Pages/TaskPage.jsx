import HeaderDetailsTask from "../Components/HeaderDetailsTask";
import DetailsTask from "../Components/DetailsTask";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="app">
      <div className="principal">
        <HeaderDetailsTask />
        <DetailsTask title={title} description={description} />
      </div>
    </div>
  );
}

export default TaskPage;
