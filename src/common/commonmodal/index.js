import React, { useEffect, useState } from "react";

export default function Commonmodal({
  children,
  ModalOverlayclassName,
  ModalclassName,
  isOpen,
  onClose,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${ModalOverlayclassName}`}
      ></div>
      <div
        className={`fixed top-16 z-[99] left-2/4 -translate-x-2/4 p-6 bg-white rounded-lg shadow-lg transition-all duration-200 transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
        } ${ModalclassName}`}
      >
        {children}
      </div>
    </>
  );
}
