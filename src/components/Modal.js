import { useRef } from 'react';
import ReactDOM from 'react-dom';

import Close from '../assets/icons/icon-close.svg';

export const Modal = ({ setShowModal }) => {
  const modalRef = useRef();

  const closeImg = <img className="modal-close" src={Close} alt="To close the modal" />

  const closeModal = ( evt ) => {
    if (evt.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal-container">
        <h6 className="small-title">Thank you for contacting us !</h6>
        <button className="modal-button" onClick={() => setShowModal(false)}>
          {closeImg}
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
