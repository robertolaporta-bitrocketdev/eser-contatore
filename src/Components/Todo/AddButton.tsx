import { FC } from "react";

interface Props {
  nomeButton: string;
  onClick: () => void;
}

export const AddButton: FC<Props> = ({ nomeButton, onClick }): JSX.Element => {
  return <button onClick={onClick}>{nomeButton}</button>;
};
