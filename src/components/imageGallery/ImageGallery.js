import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onOpenModal }) => (
  <ul className={css.ImageGallery}>
    {items.map(item => {
      return (
        <ImageGalleryItem data={item} key={item.id} onOpenModal={onOpenModal} />
      );
    })}
  </ul>
);
export default ImageGallery;
