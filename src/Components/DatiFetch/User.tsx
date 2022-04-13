import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Data } from ".";

interface Props {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
  item: Data;
}

export const User: FC<Props> = ({
  userId,
  id,
  title,
  completed,
  item,
}): JSX.Element => {
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    dispatch({
      type: "INSERT_USER",
      payload: {
        id: item.id,
        title: item.title,
        completed: item.completed,
      },
    });
  };
  return (
    <li>
      <p>
        userId: <span className="purple">{userId}</span>
      </p>
      <p>
        id: <span className="purple">{id}</span>
      </p>
      <p>
        title: <span className="purple">{title}</span>
      </p>
      <p>
        completed: <span className="purple">{JSON.stringify(completed)}</span>
      </p>
      <button disabled={isDisabled} onClick={handleClick}>
        Preferito
      </button>
    </li>
  );
};
