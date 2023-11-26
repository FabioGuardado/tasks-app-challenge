import { useContext } from 'react';

import { ModalContext } from '../context/ModalContext';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('ModalContext is indefined');
  return { ...context };
};

export default useModalContext;
