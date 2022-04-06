import { FC } from "react";

interface Props {
  name: string;
  onClick: () => void;
}

export const ListElement: FC<Props> = ({ name, onClick }): JSX.Element => {
  return (
    <>
      <li>
        <p>{name}</p>
        <button onClick={onClick}>Delete</button>
      </li>
    </>
  );
};
