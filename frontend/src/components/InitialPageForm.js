import React from "react";
import EditForm from "./EditForm";

function InitialPageForm({onSubmit, name, title, sumbitButtonName, children}) {

  return(
    <div className={'page__edit-form'}>
      <EditForm
        name={name}
        title={title}
        sumbitButtonName={sumbitButtonName}
        onSubmit={onSubmit}
        formMod={'edit-form_theme_dark'}
        titleMod={'edit-form__title_place_page'}
        sumbitButtonMod={'button_place_initialpage-form button_theme_dark'}
      >
      {children}
      </EditForm>
    </div>
  );
}

export default InitialPageForm;
