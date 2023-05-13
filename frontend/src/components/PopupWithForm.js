import React from "react";
import Popup from "./Popup";
import EditForm from "./EditForm";

function PopupWithForm({title, name, sumbitButtonName, children, isOpen, onClose, onSubmit}) {

  return(
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <EditForm name={name} title={title} sumbitButtonName={sumbitButtonName} onSubmit={onSubmit}
        formMod={'popup__edit-form'}
      >
        {children}
      </EditForm>
    </Popup>
  );
}

export default PopupWithForm;
