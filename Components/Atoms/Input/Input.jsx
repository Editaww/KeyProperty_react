import React from "react";
import styles from "../Input/styles.module.css";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
