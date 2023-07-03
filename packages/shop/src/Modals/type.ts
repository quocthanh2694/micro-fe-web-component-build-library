export type ModalKey = 'isShowMenuModal' | 'isShowAuthModal';

export interface ModalContextType {
    isShowMenuModal?: boolean;
    isShowAuthModal?: boolean;
    setToggleShowModal: (key: ModalKey, val: boolean) => void;
}