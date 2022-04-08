import { FC, useEffect, useState } from "react";

export const Counter: FC = (): JSX.Element => {
  const [number, setNumber] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (number > 0) {
      setIsDisabled(false);
    } else if (number === 0) {
      setIsDisabled(true);
    }
  }, [number]);
  const add = () => {
    setNumber(number + 1);
  };

  const remove = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <button onClick={() => add()}>ADD</button>
      <h1>{number}</h1>
      <button disabled={isDisabled} onClick={() => remove()}>
        REMOVE
      </button>
    </>
  );
};
