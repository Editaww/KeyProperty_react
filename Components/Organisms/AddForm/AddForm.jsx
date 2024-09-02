import React, { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import axios from "axios";
import styles from "../AddForm/styles.module.css";

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    price: "",
    imgUrl: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const updateFormData = (d) => {
    setFormData({
      ...formData,
      [d.target.name]: d.target.value,
    });
  };

  const postForm = async (d) => {
    d.preventDefault();
    try {
      const response = await axios.post(
        "https://6672a64e6ca902ae11b12a1c.mockapi.io/property",
        formData
      );
      console.log("Data successfully posted", response.data);

      setStatusMessage("Property successfully added!");

      setFormData({
        title: "",
        city: "",
        price: "",
        imgUrl: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        type="text"
        name="imgUrl"
        value={formData.imgUrl}
        onChange={updateFormData}
        placeholder="Image URL"
      />

      <Input
        type="text"
        name="title"
        value={formData.title}
        onChange={updateFormData}
        placeholder="Title"
      />
      <Input
        type="text"
        name="city"
        value={formData.city}
        onChange={updateFormData}
        placeholder="City"
      />
      <Input
        type="number"
        name="price"
        value={formData.price}
        onChange={updateFormData}
        placeholder="Price"
      />

      <Button className={styles.button} onClick={postForm}>
        Add Property
      </Button>

      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </div>
  );
};

export default AddForm;
