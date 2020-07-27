import React from "react";
import styles from "../styles/formElement.module.css";

const FormElement = ({ id, data, changeListener, focusListener, addRef }) => {
  let touched = data.pristine ? "" : styles.touched;
  return (
    <div>
      <div className={[styles.circle, touched].join(" ")}></div>
      <div className={[styles.line, touched].join(" ")}></div>
      <div className="field" key={`field-${id}`}>
        <label htmlFor={id}>{data.name}</label>
        <label className={[styles.inputsizer, styles.stacked].join(" ")}>
          <textarea
            ref={data.selfReference}
            id={id}
            name={id}
            value={data.value}
            onFocus={(e) => focusListener(e)}
            onChange={(e) => changeListener(e)}
            rows="1"
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default FormElement;
