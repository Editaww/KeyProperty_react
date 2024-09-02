import styles from "./styles.module.css";

const GalleryCard = ({ imgUrl, title, city, price }) => {
  return (
    <div className={styles.main}>
      <img src={imgUrl} alt="property foto" />
      <h1>{title}</h1>
      <h2>{city}</h2>
      <h3>{price}€</h3>
    </div>
  );
};

export default GalleryCard;
