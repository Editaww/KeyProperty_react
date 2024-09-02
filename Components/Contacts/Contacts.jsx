import React from "react";
import ContactsForm from "../Organisms/ContactsForm/ContactsForm";
import styles from "./styles.module.css";

const ContactsTemplate = () => {
  return (
    <div className={styles.main}>
      <h2>Contacts</h2>
      <ContactsForm />
    </div>
  );
};

export default ContactsTemplate;
