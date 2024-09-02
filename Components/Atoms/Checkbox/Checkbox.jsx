import React from "react";
import styles from "./styles.module.css";

const checkbox = ({ name, checked, onChange, children }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <div className={styles.checkbox}>{children}</div>
    </div>
  );
};
export default checkbox;
