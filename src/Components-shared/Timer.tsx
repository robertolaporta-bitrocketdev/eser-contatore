import moment from "moment";
import { FC, useState } from "react";

export const Timer: FC = (): JSX.Element => {
  const [second, setSecond] = useState(0);

  setInterval(() => {
    setSecond(second + 1);
  }, 1000);

  return <h1>Timer: {moment().format("MMMM Do YYYY, h:mm:ss")}</h1>;
};
