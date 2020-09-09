import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRootRef = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  hendleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImage } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.hendleOverlayClick}>
        <div className={styles.Modal}>
          <img src={largeImage} alt="photo" />
        </div>
      </div>,
      modalRootRef,
    );
  }
}

Modal.propType = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
