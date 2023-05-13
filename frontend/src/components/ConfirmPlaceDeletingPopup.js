import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

function ConfirmPlaceDeletingPopup({isOpen, card, onClose, onDeletePlace}) {
  const isLoading = useContext(IsLoadingContext);

  function handleSubmit(e) {
    e.preventDefault();
    onDeletePlace(card);
  };

  return(
    <PopupWithForm
      title={'Вы уверены?'}
      name={'delete-photoCard'}
      sumbitButtonName={isLoading ? 'Удаление...' : 'Да'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmPlaceDeletingPopup;
