import React from "react";

export const Alert = ({ alert }) => {
  if(!alert){
    return null 
  }

  return (
    <div
      className={`alert alert-${alert.type || 'worning'} alert-dismissible mt-3`}
      role="alert"
    >
      <strong>Atantion!</strong>
      {alert.text}
      <button
        type="button"
        class="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
