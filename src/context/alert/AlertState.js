import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReduser } from "./alertReduser";
import { SHOW_ALERT, HIDE_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReduser, { visible: false });
  const show = (text, type = "warning") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type }
    });
  };

  const hide = () => {
    dispatch({ type:HIDE_ALERT });
  };
  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        alert: state
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
