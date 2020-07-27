import React from "react";

const FormElement = ({ id, data, changeListener }) => {
  return (
    <div className="field" key={`field-${id}`}>
      <label htmlFor={id}>{data.name}</label>
      <input
        onChange={(event) => {
          changeListener(event);
        }}
        type="text"
        name={id}
        id={id}
        value={data.value}
      />
    </div>
  );
};

export default FormElement;
