import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import burgerBtn from "../../assets/burgerBtn.svg";

const Header = () => {
  const links = [
    { link: "/", title: "Home" },
    { link: "/gallery", title: "Gallery" },
    { link: "/main", title: "Add Property" },
    { link: "/contacts", title: "Contacts" },
  ];
  const [isShowOverlay, setShowOverlay] = useState(false);

  const navBar = (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>KeyProperty </div>

        {navBar}
        <button
          onClick={() => {
            setShowOverlay(!isShowOverlay);
          }}
        >
          <img src={burgerBtn.src} alt="menu button" />
        </button>
      </header>
      <div
        className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}
      >
        {navBar}
      </div>
    </>
  );
};
export default Header;
