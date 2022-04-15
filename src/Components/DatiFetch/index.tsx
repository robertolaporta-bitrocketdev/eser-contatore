import { Button, Table } from "antd";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FetchButton } from "./FetchButton";
import { SelectBool } from "./SelectBool";
import { User } from "./User";

export interface Data {
  key?: number;
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export const DatiFetch: FC = (): JSX.Element => {
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
    <User
      key={item.id}
      userId={item.userId}
      id={item.id}
      title={item.title}
      completed={item.completed}
      item={item}
    />
  ));

  return (
    <>
      <Link to="/fetchTable">
        <button>Table</button>
      </Link>
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
    </>
  );
};
