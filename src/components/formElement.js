import React from "react";
import styles from "../styles/formElement.module.css";

const FormElement = ({ id, data, changeListener, focusListener }) => {
  let touched = data.pristine ? "" : styles.touched;
  return (
    <div>
      <div className={[styles.circle, touched].join(" ")}></div>
      <div className={[styles.line, touched].join(" ")}></div>
      <div className="field" key={`field-${id}`}>
        <label htmlFor={id}>{data.name}</label>
        <input
          className={styles.textarea}
          onFocus={(e) => focusListener(e)}
          onChange={(e) => changeListener(e)}
          type="text"
          name={id}
          id={id}
          value={data.value}
        />
      </div>
    </div>
  );
};

export default FormElement;
