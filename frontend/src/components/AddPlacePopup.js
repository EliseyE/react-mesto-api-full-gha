import React, { useRef, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const cardName = useRef();
  const cardLink = useRef();
  const isLoading = useContext(IsLoadingContext);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name: cardName.current.value, link: cardLink.current.value});
  };

  useEffect(() => {
    if(isOpen) {
    cardName.current.value = '';
    cardLink.current.value = ''; }
  }, [isOpen]);

  return(
    <PopupWithForm
      title={'Новое место'}
      name={'create-photoCard'}
      sumbitButtonName={isLoading ? 'Создание...' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="edit-form__input-container">
        <label className="edit-form__input-label">
          <input
            className="edit-form__input edit-form__input_kind_create-photoCard-name"
            placeholder="Название"
            type="text"
            name="create-photoCard-name"
            id="create-photoCard-name"
            required
            minLength="2"
            maxLength="30"
            ref={cardName}
          />
          <span className="edit-form__input-error create-photoCard-name-error"></span>
        </label>
        <label className="edit-form__input-label">
          <input
            className="edit-form__input edit-form__input_kind_create-photoCard-link"
            placeholder="Ссылка на картинку"
            type="url"
            name="create-photoCard-link"
            id="create-photoCard-link"
            required
            ref={cardLink}
          />
          <span className="edit-form__input-error create-photoCard-link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
