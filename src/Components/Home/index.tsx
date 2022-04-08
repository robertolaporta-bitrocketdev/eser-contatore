import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = (): JSX.Element => {
  return (
    <div>
      <Link to="counter">
        <button>Contatore</button>
      </Link>
      <Link to="fetching">
        <button>Fetching</button>
      </Link>
      <Link to="preferiti">
        <button>Preferiti</button>
      </Link>
    </div>
  );
};
