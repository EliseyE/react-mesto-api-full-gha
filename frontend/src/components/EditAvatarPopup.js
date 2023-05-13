import React, { useRef, useEffect, useContext } from "react";
import { IsLoadingContext } from "../contexts/IsLoadingContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const userAvatar = useRef();
  const isLoading = useContext(IsLoadingContext);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(userAvatar.current.value);
  };

  useEffect(() => {
    userAvatar.current.value = '';
  }, [isOpen]);

  return(
    <PopupWithForm
      title={'Обновить аватар'}
      name={'change-avatar'}
      sumbitButtonName={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="edit-form__input-container">
        <label className="edit-form__input-label">
          <input
            className="edit-form__input edit-form__input_kind_change-avatar-link"
            placeholder="Ссылка на картинку"
            type="url"
            name="change-avatar-link"
            id="change-avatar-link"
            required
            ref={userAvatar}
          />
          <span className="edit-form__input-error change-avatar-link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
