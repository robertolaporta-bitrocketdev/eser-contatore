import { FC } from "react";

interface Props {
  onChange: (e: any) => void;
}

export const SelectBool: FC<Props> = ({ onChange }): JSX.Element => {
  return (
    <>
      <label>Filtra per: </label>

      <select onChange={onChange}>
        <option value="Incompleted">Incompleted</option>
        <option value="Completed">Completed</option>
      </select>
    </>
  );
};
