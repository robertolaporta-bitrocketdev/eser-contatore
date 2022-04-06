import React, { FC } from "react";
import { useDispatch } from "react-redux";

export const GetDataButton: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch({ type: "CHANGE_CITY", payload: "Palermo" })}
    >
      Get Data
    </button>
  );
};
