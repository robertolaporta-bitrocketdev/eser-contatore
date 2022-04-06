import { FC, useState } from "react";
import { Button } from "./Button";

export const Counter: FC = (): JSX.Element => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Button nomeButton={"ADD"} onClick={() => setNumber(number + 1)} />
      <h1>{number}</h1>
      <Button nomeButton={"REMOVE"} onClick={() => setNumber(number - 1)} />
    </>
  );
};
