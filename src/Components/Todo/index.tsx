import { ChangeEvent, FC, useEffect, useState } from "react";
import { AddButton } from "./AddButton";
import { ListElement } from "./ListElement";

export const Todo: FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<Array<string>>([]);
  // const arrName: Array<string> = [];
  const getValue = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const createElement = () => {
    setList([...list, name]);
  };

  const remove = (todo: string) => {
    const filterList = list.filter((elemento) => elemento !== todo);
    setList(filterList);
  };

  return (
    <div>
      <input type="text" onChange={(event) => getValue(event)} />
      <AddButton nomeButton={"Add to list"} onClick={createElement} />
      <ul>
        {list.map((element) => (
          <ListElement
            name={element}
            onClick={() => {
              remove(element);
            }}
          />
        ))}
      </ul>
    </div>
  );
};
