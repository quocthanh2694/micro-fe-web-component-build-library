import { useCallback, useMemo, useState } from "react";
import Modal, { ModalContext, modalContextInitValue } from "./Modals/Modal";
import Router from "./Router";

import "./styles/global.scss";
import { ModalContextType, ModalKey } from "./Modals/type";

const App = () => {
  const [modalData, setModalData] = useState<ModalContextType>(
    modalContextInitValue
  );

  const setIsShowModal = useCallback((key: ModalKey, value: boolean) => {
    setModalData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }, []);

  const modalProviderValue = useMemo(() => {
    return { ...modalData, setToggleShowModal: setIsShowModal };
  }, [modalData, setIsShowModal]);

  return (
    <ModalContext.Provider value={modalProviderValue}>
      <Router />
      <Modal />
    </ModalContext.Provider>
  );
};

export default App;
