import React from "react";
import SingleMenu from "./SingleMenu";

function SingleMenuLogOut({text, link, linkText, singleMenuMod, textMod, linkMod, onClick }) {

  return(
      <SingleMenu
        text={text || ''}
        link={link || ''}
        linkText={linkText || 'Выйти'}
        singleMenuMod={singleMenuMod || ''}
        textMod={textMod || ''}
        linkMod={linkMod || ''}
        onClick={onClick || ''}
      />
  );
}

export default SingleMenuLogOut;
