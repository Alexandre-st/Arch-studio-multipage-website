import { useRef } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ setShowModal }) => {
  const modalRef = useRef();

  const closeModal = ( evt ) => {
    if (evt.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal-container">
        <h6>Thank you for contacting us!</h6>
      </div>
    </div>,
    document.getElementById('portal')
  );
};
