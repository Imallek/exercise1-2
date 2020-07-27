import React from "react";
import styles from "../styles/formElement.module.css";
import { ReactComponent as CheckMark } from "./../styles/check.svg";

const FormElement = ({ id, data, changeListener, focusListener, addRef }) => {
  let touched = data.pristine ? "" : styles.touched;
  let circleStyles = [styles.circle, touched].join(" ");
  let lineStyles = [styles.line, touched].join(" ");
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={circleStyles}>{touched ? <CheckMark /> : ""}</div>
        <div className={lineStyles}></div>
      </div>
      <div className={styles.inputFields} key={`field-${id}`}>
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
        <label className={styles.label} htmlFor={id}>
          {data.name}
        </label>
      </div>
    </div>
  );
};

export default FormElement;
