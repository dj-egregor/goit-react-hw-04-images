import React, { useEffect, useState } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = props => {
  const handleKeyPress = event => {
    if (event.keyCode === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="modal" onClick={props.onClickClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img className={css.Largeimg} src={props.largeImageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
