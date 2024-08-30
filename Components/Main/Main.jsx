import React from "react";
import Form from "../Organisms/Form/Form";
import styles from "./styles.module.css";

const MainTemplate = () => {
  return (
    <div className={styles.mainTemplate}>
      <main>
        <h2>Add New Property</h2>
        <Form />
      </main>
    </div>
  );
};

export default MainTemplate;
