import React, { useEffect, useRef } from "react";
import "./loginModal.css";
import { createPortal } from "react-dom";
// import "./Dialog";

export function LoginModal({ isOpen, onClose, children }) {
  //   console.log(isOpen, onClose, children);
  const modalRef = useRef(null);
  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`modal-overlay ${isOpen && "show"}`}>
      <div ref={modalRef}>{children}</div>
    </div>,
    document.querySelector("#modal-container")
  );
}
