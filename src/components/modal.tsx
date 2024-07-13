import {createPortal} from "react-dom";
import './modal.css'

interface ModalProps {
    isOpened: boolean;
    children?: React.ReactNode;
    onClose: () => void;
}

export const Modal = ({isOpened, onClose, children}: ModalProps) => {
    if (!isOpened) {
        return null;
    }
    return createPortal(<div>
        <div className="overlay"></div>
        <div className="modal">
            <div>
                <span className="close-button" onClick={onClose}>X</span>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    </div>, document.getElementById('modal') || document.body);
}