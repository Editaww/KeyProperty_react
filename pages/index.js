import Header from "../Components/Header/Header";
import HomePage from "../Components/HomePage/HomePage";
import Footer from "../Components/Footer/Footer";

const MainPage = () => {
  const links = [
    { link: "/main", title: "Add Property" },
    { link: "/gallery", title: "Gallery" },
    { link: "/contacts", title: "Contacts" },
  ];

  return (
    <>
      <Header links={links} />
      <HomePage />
      <Footer />
    </>
  );
};
export default MainPage;
