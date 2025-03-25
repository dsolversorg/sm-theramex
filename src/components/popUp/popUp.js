import React from 'react';
import PropTypes from 'prop-types';
import '../../css/popUp.css';

function Popup({ children, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button type="button" className="close-btn" onClick={onClose}>
          <img
            src="https://metadoctors.com.br/app/wp-content/uploads/2024/12/Group-20.png"
            alt="Botão fechar"
            className="close-btn-img"
          />
        </button>
        {children}
      </div>
    </div>
  );
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
