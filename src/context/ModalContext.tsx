import { createContext, useMemo, useCallback, useState } from 'react';
import IModal from '../interfaces/modal';

type ModalContextValues = {
  modal: IModal;
  showModal: (arg1: JSX.Element) => void;
  clearModal: () => void;
};

type ModalProviderProps = {
  children: JSX.Element;
};

const INITIAL_MODAL_STATE = {
  isVisible: false,
  modalContent: undefined,
};

export const ModalContext = createContext<ModalContextValues | undefined>(
  undefined
);

export const ModalProvider: React.FunctionComponent<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const [modal, setModal] = useState<IModal>(INITIAL_MODAL_STATE);

  const showModal = useCallback((modalContent: JSX.Element) => {
    setModal({
      isVisible: true,
      modalContent,
    });
  }, []);

  const clearModal = useCallback(() => {
    setModal({
      isVisible: false,
      modalContent: undefined,
    });
  }, []);

  const providerValue = useMemo(
    () => ({ modal, showModal, clearModal }),
    [modal, showModal, clearModal]
  );
  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};
