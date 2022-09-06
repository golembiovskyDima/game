import React, { PropsWithChildren } from "react";
import "./Modal.scss";

type Props = PropsWithChildren & {
    isOpen: boolean;
}
export const Modal: React.FC<Props> = ({ children, isOpen }) => {

    if(!isOpen) return null;

    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-overlay" />
                <div className="modal-content">{children}</div>
            </div>
        </div>
    )
} 