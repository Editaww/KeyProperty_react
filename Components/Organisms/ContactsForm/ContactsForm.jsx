import React, { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import Button from "../../Atoms/Button/Button";
import styles from "./styles.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    letterTitle: "",
    letterContent: "",
    senderName: "",
    isAgreed: false,
  });

  const updateFormData = (d) => {
    const { name, value, type, checked } = d.target;
    setFormData((formData) => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const postForm = () => {
    if (!formData.isAgreed) {
      console.log("Prašau pažymėti checkbox'ą");
    } else {
      console.log(formData);

      setFormData({
        letterTitle: "",
        letterContent: "",
        senderName: "",
        isAgreed: false,
      });
    }
  };

  return (
    <div className={styles.contactForm}>
      <Input
        type="text"
        name="letterTitle"
        value={formData.letterTitle}
        onChange={updateFormData}
        placeholder="Title"
      />
      <Input
        type="textarea"
        name="letterContent"
        value={formData.letterContent}
        onChange={updateFormData}
        placeholder="Content"
      />
      <Input
        type="text"
        name="senderName"
        value={formData.senderName}
        onChange={updateFormData}
        placeholder="Name"
      />

      <Checkbox
        name="isAgreed"
        checked={formData.isAgreed}
        onChange={updateFormData}
      >
        Do you agree to be contacted later?
      </Checkbox>

      <Button type="button" onClick={postForm}>
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
