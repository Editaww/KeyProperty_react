import React from "react";
import AddForm from "../Organisms/AddForm/AddForm";
import styles from "./styles.module.css";

const MainTemplate = () => {
  return (
    <div className={styles.main}>
      <h2>Add New Property</h2>
      <AddForm />
    </div>
  );
};

export default MainTemplate;
