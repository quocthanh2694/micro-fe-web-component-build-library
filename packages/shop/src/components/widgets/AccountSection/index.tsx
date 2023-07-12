import { memo, useCallback, useContext } from "react";
import { ModalContext } from "src/Modals/Modal";
import { ModalContextType } from "src/Modals/type";
import { useAppContext } from "src/context/reducer";
import { LogoutIcon, UserIcon } from "src/icons";

export const AccountSection = memo(() => {
  const { user, handleLogout } = useAppContext();
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  const handleOpenAuthModal = useCallback(() => {
    if (user?.id) {
      const confirmed = confirm("Are you sure you want to logout?");
      confirmed && handleLogout();
    } else {
      setToggleShowModal("isShowAuthModal", true);
    }
  }, [handleLogout, user?.id, setToggleShowModal]);

  return (
    <>
      <h4 className="menu__item" onClick={handleOpenAuthModal}>
        {user?.id ? (
          <>
            <span className="text-ellipsis-1 username" title={user.name}>
              {user.name}
            </span>
            <LogoutIcon />
          </>
        ) : (
          <UserIcon />
        )}
      </h4>
    </>
  );
});
