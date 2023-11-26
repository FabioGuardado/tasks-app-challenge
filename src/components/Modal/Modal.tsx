import { Icon } from '@iconify/react';

import useModalContext from '../../hooks/useModalContext';

import './Modal.scss';

const Modal = () => {
  const { modal, clearModal } = useModalContext();

  return modal.isVisible ? (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal__header">
          <button type="button" className="close-button" onClick={clearModal}>
            <Icon icon="material-symbols:close" height={20} />
          </button>
        </div>
        <div className="modal__content">{modal.modalContent}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
