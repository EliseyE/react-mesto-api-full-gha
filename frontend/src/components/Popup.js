import React from "react";

function Popup({ name, children, isOpen, onClose }) {

  const classButtonClass = `button-img button-img_type_x popup__close-button popup__close-button_type_${name}`;

  return(
    <section
      className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}
      onMouseDown={onClose}
    >
      <div className="popup__container" onMouseDown={e => e.stopPropagation()}>
        <button
          className={classButtonClass}
          type="button"
          onClick={onClose}
        ></button>
        {children}
      </div>
  </section>
  );
}

export default Popup;
