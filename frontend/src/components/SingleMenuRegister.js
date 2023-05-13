import React from "react";
import SingleMenu from "./SingleMenu";

function SingleMenuRegister({text, link, linkText, singleMenuMod, textMod, linkMod, onClick }) {

  return(
      <SingleMenu
        text={text || ''}
        link={link || '/sign-up'}
        linkText={linkText || 'Регистрация'}
        singleMenuMod={singleMenuMod || ''}
        textMod={textMod || ''}
        linkMod={linkMod || ''}
        onClick={onClick || ''}
      />
  );
}

export default SingleMenuRegister;
