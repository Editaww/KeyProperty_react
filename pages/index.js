import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Header from "../Components/Header/Header";
import HomePage from "../Components/HomePage/HomePage";
import Footer from "../Components/Footer/Footer";
import axios from "axios";

const MainPage = () => {
  const [data, setData] = useState();
  // const router = useRouter();

  const links = [
    { link: "/", title: "Home" },
    { link: "/main", title: "Add Property" },
    { link: "/gallery", title: "Gallery" },
    { link: "/contacts", title: "Contacts" },
  ];

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

  return (
    <>
      <Header links={links} />
      <HomePage />
      <Footer />
    </>
  );
};
export default MainPage;
