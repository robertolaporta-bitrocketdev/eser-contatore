import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FetchButton } from "./FetchButton";
import { SelectBool } from "./SelectBool";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const DatiFetch: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [lista, setLista] = useState(false);
  const [input, setInput] = useState();

  const fetching = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setData(json));

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  const filterData = () => {
    if (input === "Completed") {
      return data.filter((item: Data) => item.completed === true);
    } else {
      return data.filter((item: Data) => item.completed === false);
    }
  };

  const arrFilter = filterData();
  const renderData = arrFilter.map((item: Data) => (
    
    <li key={item.id}>
      
      <p>
        userId: <span className="purple">{item.userId}</span>
      </p>
      <p>
        id: <span className="purple">{item.id}</span>
      </p>
      <p>
        title: <span className="purple">{item.title}</span>
      </p>
      <p>
        completed:{" "}
        <span className="purple">{JSON.stringify(item.completed)}</span>
      </p>
      <button
        onClick={() => {
          dispatch({
            type: "INSERT_USER",
            payload: {
              id: item.id,
              title: item.title,
              completed: item.completed,
            },
          });
        }}
      >
        Preferito
      </button>
    </li>
  ));

  return (
    <>
      <Link to="/preferiti">
        <button>Preferiti</button>
      </Link>
      <FetchButton
        onClick={() => {
          fetching();
          setLista(true);
        }}
        disabled={lista ? true : false}
      />

      <SelectBool onChange={(e: any) => handleInput(e)} />
      {lista && <ul>{renderData}</ul>}

      <br />
      <br />
    </>
  );
};
