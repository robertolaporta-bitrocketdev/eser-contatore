import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { AddButton } from "./AddButton";
import { ListElement } from "./ListElement";

export const Todo: FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<Array<string>>([]);
  // const arrName: Array<string> = [];
  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const createElement = () => {
    setList([...list, name]);
    setName("");
  };

  const remove = (todo: string) => {
    const filterList = list.filter((elemento) => elemento !== todo);
    setList(filterList);
  };

  const favourite = () => {};
  return (
    <>
      <div className="element">
        <input
          placeholder="Write here"
          value={name}
          onChange={(event) => getValue(event)}
        />
        <AddButton nomeButton={"Add to list"} onClick={createElement} />
        <Link to="/preferiti">
          <button>
            Preferiti <span className="star">⭑</span>{" "}
          </button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div className="element">
        <ul>
          {list.map((element) => (
            <ListElement
              name={element}
              onClick={() => {
                remove(element);
              }}
              favourite={favourite}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
