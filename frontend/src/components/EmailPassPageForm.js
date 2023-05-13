import React, { useRef }  from "react";
import InitialPageForm from "./InitialPageForm";

function EmailPassPageForm({onSubmit, name, title, sumbitButtonName, children}) {
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({ password: password.current.value, email: email.current.value })
  }

  return(
    <>
      <InitialPageForm
        name={name}
        title={title}
        sumbitButtonName={sumbitButtonName}
        onSubmit={handleSubmit}
      >
        <fieldset className="edit-form__input-container edit-form__input-container_place_page">
          <label className="edit-form__input-label">
            <input
              className="edit-form__input edit-form__input_theme_dark edit-form__input_kind_user-email"
              placeholder="Email"
              type="email"
              name="user-email"
              id="user-email"
              required
              minLength="5"
              maxLength="30"
              ref={email}
            />
            <span className="edit-form__input-error user-email-error"></span>
          </label>
          <label className="edit-form__input-label">
            <input
              className="edit-form__input edit-form__input_theme_dark edit-form__input_kind_password"
              placeholder="Пароль"
              type="password"
              name="password"
              id="password"
              required
              minLength="4"
              maxLength="30"
              ref={password}
            />
            <span className="edit-form__input-error password-error"></span>
          </label>
        </fieldset>
        {children}
      </InitialPageForm>
    </>
  );
}

export default EmailPassPageForm;
