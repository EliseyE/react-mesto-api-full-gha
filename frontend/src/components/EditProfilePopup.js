import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const isLoading = useContext(IsLoadingContext);

  function handleChaggeName(e) {
    setName(e.target.value);
  };

  function handleChaggeDescription(e) {
    setDescription(e.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleCloseEditProfile() {
    onClose();
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  };

  return(
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'profile'}
      sumbitButtonName={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={handleCloseEditProfile}
      onSubmit={handleSubmit}
    >
      <fieldset className="edit-form__input-container">
        <label className="edit-form__input-label">
          <input
            className="edit-form__input edit-form__input_kind_profile-name"
            placeholder="Введите ваше имя"
            type="text"
            name="profile-name"
            id="profile-name"
            required
            minLength="2"
            maxLength="40"
            value={name || ''}
            onChange={handleChaggeName}
          />
          <span className="edit-form__input-error profile-name-error"></span>
        </label>
        <label className="edit-form__input-label">
          <input
            className="edit-form__input edit-form__input_kind_profile-description"
            placeholder="Введите данные о себе"
            type="text"
            name="profile-description"
            id="profile-description"
            required
            minLength="2"
            maxLength="200"
            value={description || ''}
            onChange={handleChaggeDescription}
          />
          <span className="edit-form__input-error profile-description-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
