import { FC, useEffect, useState } from "react";
import { FetchButton } from "./FetchButton";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const DatiFetch: FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [lista, setLista] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <FetchButton
        onClick={() => {
          setLista(!lista);
        }}
      />
      {lista && (
        <ul>
          {data.map((item: Data) => (
            <li>
              <p>userId : {item.userId}</p>
              <p>id: {item.id}</p>
              <p>title: {item.title}</p>
              <p>completed: {JSON.stringify(item.completed)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
