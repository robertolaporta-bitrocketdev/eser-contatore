import { FC } from "react";

interface Props {
  labelName: string;
  onChange: (e: any) => void;
}

export const InputText: FC<Props> = ({ labelName, onChange }): JSX.Element => {
  return (
    <div
      style={{
        margin: 20,
        width: 250,
        height: 30,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <label>{labelName}</label>
      <input type="text" onChange={onChange} />
    </div>
  );
};
