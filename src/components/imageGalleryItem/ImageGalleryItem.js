import React from "react";
import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ data, onOpenModal }) => {
  // console.log("=======", data);
  const url = data.webformatURL;

  return (
    <li className={css.ImageGalleryItem} onClick={onOpenModal}>
      <img
        className={css.ImageGalleryItemImage}
        id={data.id}
        src={url}
        alt="wallpaper"
      />
    </li>
  );
};

export default ImageGalleryItem;
