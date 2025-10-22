import React, { useRef, useEffect, useState } from 'react';

export default function DialogModal({ title, message }) {
    const [isOpen, setIsOpen] = useState(false);

    const dialogRef = useRef(null);

    useEffect(() => {
        const dialogElement = dialogRef.current;

        if (dialogElement) {
            if (isOpen) {
                dialogElement.showModal();
            } else {
                dialogElement.close();
            }
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleYes = () => {
        console.log("Confirmed: Yes");
        setIsOpen(false);
    };

    const handleNo = () => {
        console.log("Cancelled: No");
        setIsOpen(false);
    };
    const handleOpen = () => setIsOpen(true);


    return (
        <div className="modal-container">
            <button className="open-button" onClick={handleOpen}>Open Dialog</button>

            <dialog ref={dialogRef} className="app-modal">
                <div className="modal-header">
                    <h3 className="modal-title">{title || "Confirm Action"}</h3>
                    <button className="close-btn" onClick={handleClose} aria-label="Close dialog">
                        &times;
                    </button>
                </div>
                <div className="modal-content">
                    <p>{message || "Are you sure you want to proceed with this action?"}</p>
                </div>
                <div className="modal-actions">
                    <button className="action-btn action-no" onClick={handleNo}>No</button>
                    <button className="action-btn action-yes" onClick={handleYes}>Yes</button>
                </div>
            </dialog>
        </div>
    );
}