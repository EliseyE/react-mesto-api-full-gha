import React from "react";
import SingleMenu from "./SingleMenu";

function SingleMenuLogIn({text, link, linkText, singleMenuMod, textMod, linkMod, onClick }) {

  return(
      <SingleMenu
        text={text || ''}
        link={link || '/sign-in'}
        linkText={linkText || 'Войти'}
        singleMenuMod={singleMenuMod || ''}
        textMod={textMod || ''}
        linkMod={linkMod || ''}
        onClick={onClick || ''}
      />
  );
}

export default SingleMenuLogIn;
