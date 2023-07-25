import React from 'react';
import './modal.css';
const Modal = ({isOpen, isClose, children}) => {
    return (
        <>
            {
                isOpen && <div className="modal-overlay">
                <div className="modal">
                    <button className="modal-close" onClick={isClose}>
                        &times;
                    </button>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Modal;