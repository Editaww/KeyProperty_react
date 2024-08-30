import React from "react";
import styles from "./styles.module.css";
import GalleryCard from "../GalleryCard/GalleryCard";

const Gallery = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.main}>
      {data &&
        data.map((d) => {
          return (
            <GalleryCard
              key={d.id}
              imgUrl={d.imgUrl}
              title={d.title}
              city={d.city}
              price={d.price}
            />
          );
        })}
    </div>
  );
};
export default Gallery;
