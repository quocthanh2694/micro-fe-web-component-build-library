import classNames from "classnames";
import { memo, useCallback, useContext } from "react";
import LoginForm from "src/components/forms/LoginForm";
import { CloseModalIcon } from "src/icons";
import { ModalContext } from "../Modal";
import { ModalContextType } from "../type";
import "./styles.scss";

interface Props {
  show?: boolean;
}

const AuthModal = memo(({ show }: Props) => {
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  const handleCloseModal = useCallback(() => {
    setToggleShowModal("isShowAuthModal", false);
  }, []);

  return (
    <div
      className={classNames({
        "auth-modal modal backdrop modal-center modal-xs": true,
        show: show,
      })}
    >
      <div className="auth-modal__body modal-body">
        <div className="auth-modal__body-close" onClick={handleCloseModal}>
          <CloseModalIcon />
        </div>
        <div className="auth-modal__body-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
});

export default AuthModal;
