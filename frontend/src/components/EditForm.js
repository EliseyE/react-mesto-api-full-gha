import React from "react";

function EditForm({title, name, sumbitButtonName, children, onSubmit,
  formMod='', titleMod='', sumbitButtonMod=''}) {

  return(
    <form
      onSubmit={onSubmit}
      className={`edit-form edit-form_type_${name}
      ${formMod}`}
      name={`edit-form_type_${name}`}
    >
      <h2 className={`edit-form__title ${titleMod}`}>{title}</h2>
      {children}
      <button
        className={`button edit-form__submit-button_type_${name}
        ${sumbitButtonMod}`}
        type="submit"
      >{sumbitButtonName}</button>
    </form>
  );
}

export default EditForm;
