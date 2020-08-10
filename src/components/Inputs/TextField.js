import React from "react";

const TextField = ({ label, value, onChange, className }) => {
  const onTextChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className={`Inputs-label ${className || ""}`}>
      {label}
      <input
        className="Inputs-text-field"
        value={value}
        onChange={onTextChange}
      />
    </label>
  );
};

export default TextField;
