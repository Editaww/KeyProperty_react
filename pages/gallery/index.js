import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";

const GalleryPage = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      "https://6672a64e6ca902ae11b12a1c.mockapi.io/property"
    );
    setData(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = [
    { link: "/main", title: "Add Property" },
    { link: "/gallery", title: "Gallery" },
    { link: "/contacts", title: "Contacts" },
  ];

  return (
    <>
      <Header links={links} />
      <Gallery data={data} />
      <Footer />
    </>
  );
};

export default GalleryPage;
