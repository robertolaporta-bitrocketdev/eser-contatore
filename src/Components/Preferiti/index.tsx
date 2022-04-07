import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Preferiti: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const city = useSelector((store: any) => store.city);
  const userData = useSelector((store: any) => store.userData);
  return (
    <div className="preferitiBox">
      <h1>Preferiti</h1>
      <Link to={"/"}>
        <button>HOME</button>
      </Link>

      {/* <p>`La più bella città del mondo è {city}`</p> */}
      <br />
      <h2>Dati utente:</h2>
      <p>Id: {userData.id}</p>
      <p>Title: {userData.title}</p>
      <p>completed: {JSON.stringify(userData.completed)}</p>
      <button
        onClick={() =>
          dispatch({
            type: "INSERT_DATA",
            payload: {},
          })
        }
      >
        Elimina
      </button>
    </div>
  );
};
