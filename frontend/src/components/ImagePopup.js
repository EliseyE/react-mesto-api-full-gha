import React from "react";

function ImagePopup({ name, card, isOpen, onClose }) {

  const classButtonClass = `button-img button-img_type_x popup__close-button popup__close-button_type_${name}`;

  return(
    <section
      className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}
      aria-label="Модальное окно с картинкой"
      onMouseDown={onClose}
    >
      <div className="popup__container" onMouseDown={e => e.stopPropagation()}>
        <button
          className={classButtonClass}
          type="button"
          onClick={onClose}

        ></button>
        <figure className="figure-space">
          <img
            className="figure-space__image"
            src={card.link}
            alt={card.name}
          />
          <figcaption className="figure-space__caption">{card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ImagePopup;
