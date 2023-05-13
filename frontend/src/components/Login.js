import React from "react";
import EmailPassPageForm from "./EmailPassPageForm";


function Login({ logIn }) {

  function handleSubmit(loginData) {
    logIn(loginData);
  }

  return(
    <EmailPassPageForm
      name={'login'}
      title={'Вход'}
      sumbitButtonName={'Войти'}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
