// import React, { Component } from "react";
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';


function ImageGallery({ items }) {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item  => (
      <ImageGalleryItem
          key={item.id}
          item={item}
      />))}
    </ul>
  );
}

export default ImageGallery;
