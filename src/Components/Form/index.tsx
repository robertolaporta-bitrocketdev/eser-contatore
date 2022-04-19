import { Select } from "./Select";
import { FC, useState } from "react";
import { InputText } from "./InputText";

export const Form: FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [emailConfirm, setEmailConfirm] = useState<string>("");

  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleSurname = (e: any) => {
    setSurname(e.target.value);
  };
  const handleTelephone = (e: any) => {
    setNumber(e.target.value);
  };
  const handleCity = (e: any) => {
    setCity(e.target.value);
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleEmailConfirm = (e: any) => {
    setEmailConfirm(e.target.value);
  };
  const handleGender = (e: any) => {
    setGender(e.target.value);
  };

  const compile = () => {
    if (name === "") {
      console.log("Inserire nome valido");
    }

    if (surname === "") {
      console.log("Inserire cognome valido");
    }

    if (gender === "") {
      console.log("Scegli Genere");
    }

    if (number === undefined) {
      console.log("Inserire Numero valido");
    }

    if (city === "") {
      console.log("Inserire Città");
    }

    if (!regexMail.test(email) || !regexMail.test(emailConfirm)) {
      console.log("Inserisci email valide");

      if (email !== emailConfirm) {
        console.log("le mail non corrispondono");
      }
    } else {
      console.log(name, surname, gender, city, number, email);
    }
  };

  return (
    <div style={{ color: "blue" }}>
      <h1 style={{ color: "blue" }}>Form:</h1>
      <InputText labelName="Nome*: " onChange={handleName} />
      <InputText labelName="Cognome*: " onChange={handleSurname} />
      <Select onChange={handleGender} />
      <InputText labelName="Telefono*: " onChange={handleTelephone} />
      <InputText labelName="Città*: " onChange={handleCity} />
      <div style={{ display: "flex" }}>
        <InputText labelName="E-mail*: " onChange={handleEmail} />
        <InputText
          labelName="Conferma e-mail*: "
          onChange={handleEmailConfirm}
        />
      </div>

      <button
        onClick={compile}
        style={{ margin: 20, height: 50, width: 130, fontSize: "120%" }}
      >
        Continua
      </button>
    </div>
  );
};
