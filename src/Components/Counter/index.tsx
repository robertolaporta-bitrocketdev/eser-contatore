import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <>
      <Button nomeButton={"ADD"} onClick={() => setNumber(number + 1)} />
      <h1>{number}</h1>
      <Button nomeButton={"REMOVE"} onClick={() => setNumber(number - 1)} />
    </>
  );
};
