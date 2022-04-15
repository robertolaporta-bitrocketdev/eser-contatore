import { stringify } from "querystring";
import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Params: FC = (): JSX.Element => {
  const [inputAdd, setInputAdd] = useState<string>("/");
  const [inputModify, setInputModify] = useState<string>("params");

  const { id } = useParams();

  const handleInputAdd = (e: any) => {
    setInputAdd(e.target.value);
  };

  const handleInputModify = (e: any) => {
    setInputModify(e.target.value);
  };

  const path = window.location.pathname;
  const slice = path.split("/");

  console.log(slice[2]);

  return (
    <>
      <h1>Params:</h1>
      <label>Aggiungi</label>
      <br />
      <input type="text" onChange={(e) => handleInputAdd(e)} />
      <Link to={`${inputAdd}`}>
        <button>Amunì</button>
      </Link>
      <br />
      <label>Modifica</label>
      <br />
      <input type="text" onChange={(e) => handleInputModify(e)} />
      <Link to={`/params/${inputModify}`}>
        <button>Cambio</button>
      </Link>
      <h1>{id}</h1>
    </>
  );
};
