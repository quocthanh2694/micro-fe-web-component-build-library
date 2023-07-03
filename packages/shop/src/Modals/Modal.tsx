import { createContext, memo, useContext, useEffect, useMemo } from "react";
import MenuModal from "./MenuModal";
import AuthModal from "./AuthModal";
import { ModalContextType } from "./type";

export const modalContextInitValue: ModalContextType = {
  setToggleShowModal(key, val) {},
  isShowAuthModal: true,
  isShowMenuModal: false,
};

export const ModalContext = createContext<ModalContextType>(
  modalContextInitValue
);

const Modal = memo(() => {
  const { isShowAuthModal, isShowMenuModal } =
    useContext<ModalContextType>(ModalContext);

  const isOpening = useMemo(() => {
    return isShowMenuModal || isShowAuthModal;
  }, [isShowMenuModal, isShowAuthModal]);

  useEffect(() => {
    if (isOpening) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpening]);

  return (
    <>
      <MenuModal show={isShowMenuModal} />
      <AuthModal show={isShowAuthModal} />
    </>
  );
});

export default Modal;
