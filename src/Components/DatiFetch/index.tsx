import { FC, useEffect, useState } from "react";
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
      <p>userId: {item.userId}</p>
      <p>id: {item.id}</p>
      <p>title: {item.title}</p>
      <p>completed: {JSON.stringify(item.completed)}</p>
    </li>
  ));

  return (
    <>
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
