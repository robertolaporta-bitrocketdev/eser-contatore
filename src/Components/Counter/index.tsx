import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

interface TProps {
  number: number;
  setNumber: (value: number) => void;
}

export const Counter: FC<TProps> = ({ number, setNumber }): JSX.Element => {
  return (
    <>
      <Button nomeButton={"ADD"} onClick={() => setNumber(number + 1)} />
      <h1>{number}</h1>
      <Button nomeButton={"REMOVE"} onClick={() => setNumber(number - 1)} />
    </>
  );
};
