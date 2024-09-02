import React from "react";
import Header from "../../Components/Header/Header";
import Contacts from "../../Components/Contacts/Contacts";
import Footer from "../../Components/Footer/Footer";

const ContactsPage = () => {
  const links = [
    { link: "/main", title: "Add Property" },
    { link: "/gallery", title: "Gallery" },
    { link: "/contacts", title: "Contacts" },
  ];

  return (
    <>
      <Header links={links} />
      <Contacts />
      <Footer />
    </>
  );
};

export default ContactsPage;
