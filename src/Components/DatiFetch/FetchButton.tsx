import { FC } from "react";

interface Props {
  onClick: () => void;
}

export const FetchButton: FC<Props> = ({ onClick }): JSX.Element => {
  return <button onClick={onClick}>Fetch Users Data</button>;
};
