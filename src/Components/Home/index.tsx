import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = (): JSX.Element => {
  return (
    <div className="element">
      <p>Scegli componente:</p>
      <Link to="counter">
        <button>Contatore</button>
      </Link>
      <Link to="fetching">
        {" "}
        <button>Fetching</button>
      </Link>
      <Link to="todo">
        {" "}
        <button>Todo-list</button>
      </Link>
      <Link to="preferiti">
        {" "}
        <button> Preferiti <span className="star">⭑</span></button>
      </Link>
    
    </div>
  );
};
