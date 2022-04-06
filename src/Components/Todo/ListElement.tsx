import { FC } from "react";

interface Props {
  name: string;
  onClick: () => void;
  favourite: () => void;
}

export const ListElement: FC<Props> = ({
  name,
  onClick,
  favourite,
}): JSX.Element => {
  return (
    <>
      <li className="element">
        <p>{name}</p>
        <button onClick={onClick}>Delete</button>
        <button className="star" onClick={favourite}>
          ⭑
        </button>
      </li>
    </>
  );
};
