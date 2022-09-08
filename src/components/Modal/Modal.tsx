import React, { PropsWithChildren } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import "./Modal.scss";

interface ModalProps extends PropsWithChildren {
    isOpen: boolean;
}
export const Modal: React.FC<ModalProps> = ({ children, isOpen }): JSX.Element | null => {
    const container = document.getElementById('modal');

    const ModalComponent = () => {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-overlay" />
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        )
    }

    if(isOpen && container) {
        return createPortal(<ModalComponent />, container);
    } 

    return null
} 

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}