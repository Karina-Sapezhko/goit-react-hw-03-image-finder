import React from 'react';
import { ImageGalleryItem } from './imageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, getLargeImage, toggleModal }) => (
  <ul className={styles.ImageGallery}>
    {gallery.map(item => {
      return (
        <ImageGalleryItem
          key={item.id}
          {...item}
          toggleModal={toggleModal}
          getLargeImage={getLargeImage}
        />
      );
    })}
  </ul>
);

ImageGallery.propType = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
