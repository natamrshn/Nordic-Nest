import { modalContent, modalOverlay } from "./modal.styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    positionClass?: string; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, positionClass }) => {
    if (!isOpen) return null; 

    return (
        <div className={modalOverlay} onClick={onClose}>
            <div className={`${positionClass || ''}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;

