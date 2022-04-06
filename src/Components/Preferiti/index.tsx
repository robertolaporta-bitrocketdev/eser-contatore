import { FC } from "react";
import { Link } from "react-router-dom";

export const Preferiti: FC = (): JSX.Element => {
  return (
    <div className="preferitiBox">
      <h1> Preferiti <span className="star">⭑</span></h1>
      <p>Torniamo alla Home:</p>
      <Link to={"/"}>
        <button>HOME</button>
      </Link>
    </div>
  );
};
