import { FC } from "react";

interface Props {
  onChange: (e: any) => void;
}

export const Select: FC<Props> = ({ onChange }): JSX.Element => {
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
      <label>Sesso*: </label>
      <select
        defaultValue={"Default"}
        onChange={onChange}
        style={{ width: 162 }}
        name="Sesso"
        id="Sesso"
      >
        <option value="Default" disabled>
          Scegli Genere ...
        </option>

        <option value="Maschio">Maschio</option>
        <option value="Femmina">Femmina</option>
      </select>
    </div>
  );
};
