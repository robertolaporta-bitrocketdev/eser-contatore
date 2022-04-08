import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TStore } from "../../redux/rootReducer";

function selectorUserList(store: TStore) {
  const userData = store.userData;
  return userData;
}

export const Preferiti: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const objData = useSelector(selectorUserList);
  const userList = Object.values(objData);

  return (
    <div className="preferitiBox">
      <h1>Preferiti</h1>
      <Link to={"/"}>
        <button>HOME</button>
      </Link>
      <button
        onClick={() =>
          dispatch({
            type: "TOTAL_RESET_DATA",
          })
        }
      >
        CLEAR ALL
      </button>
      <br />

      {userList.map((element, index) => (
        <div key={element.id}>
          <div>
            <p>Utente {index + 1}:</p>
            <p>
              Id: <span className="purple">{element.id}</span>
            </p>
            <p>
              Titolo: <span className="purple">{element.title}</span>
            </p>
            <p>
              Completed:{" "}
              <span className="purple">
                {JSON.stringify(element.completed)}
              </span>
            </p>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_USER",
                  payload: element.id,
                })
              }
            >
              Elimina
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
