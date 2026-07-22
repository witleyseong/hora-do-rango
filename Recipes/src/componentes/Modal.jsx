import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

function Modal({ title, onClose, children }) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        closeButtonRef.current?.focus();
        function handleKeyDown(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className={styles.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className={styles.header}>
                    <h2 id="modal-title" className={styles.title}>{title}</h2>
                    <button
                        type="button"
                        ref={closeButtonRef}
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ×
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
