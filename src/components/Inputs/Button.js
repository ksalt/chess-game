import React from "react";

const Button = ({ label, disabled, onClick, children }) => {
  return (
    <button className="Inputs-btn" disabled={disabled} onClick={onClick}>
      {children || label}
    </button>
  );
};

export default Button;
