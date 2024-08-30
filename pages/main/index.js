import React from "react";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";

const mainContentPage = () => {
  const links = [
    { link: "/main", title: "Add Property" },
    { link: "/gallery", title: "Gallery" },
    { link: "/contacts", title: "Contacts" },
  ];

  return (
    <>
      <Header links={links} />
      <Main />
      <Footer />
    </>
  );
};

export default mainContentPage;
