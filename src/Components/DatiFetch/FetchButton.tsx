import { FC } from "react";

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

export const FetchButton: FC<Props> = ({
  onClick,
  disabled = false,
}): JSX.Element => {
  return (
    <button disabled={disabled} onClick={onClick}>
      Fetch Data
    </button>
  );
};
