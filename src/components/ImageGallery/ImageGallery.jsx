import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem";
import css from './ImageGallery.module.css';


const ImageGallery = ({items, onOpenLarge }) => {
  return (
    <ul className={css.ImageGallery}>
      {items.map(({id, largeImageURL, webformatURL}) => (
        <ImageGalleryItem
          key ={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          openLargeImg={onOpenLarge}
        /> ))}
    </ul>
  );
}

ImageGallery.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  onOpenLarge: PropTypes.func.isRequired,
}

export default ImageGallery;
