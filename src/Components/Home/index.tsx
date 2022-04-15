import { FC } from "react";
import { Link } from "react-router-dom";
import { Timer } from "../../Components-shared/Timer";

export const Home: FC = (): JSX.Element => {
  return (
    <div>
      <Link to="counter">
        <button>Contatore</button>
      </Link>
      <Link to="fetching">
        <button>Fetching</button>
      </Link>
      <Link to="params">
        <button>Params</button>
      </Link>
      <Timer />
    </div>
  );
};
