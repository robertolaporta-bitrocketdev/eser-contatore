import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Preferiti: FC = (): JSX.Element => {
  const city = useSelector((store: any) => store.city);

  return (
    <div className="preferitiBox">
      <h1>Preferiti</h1>
      <p>Torniamo alla Home:</p>
      <Link to={"/"}>
        <button>HOME</button>
      </Link>

      <p>`La più bella città del mondo è {city}`</p>
    </div>
  );
};
