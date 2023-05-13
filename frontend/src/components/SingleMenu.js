import React from "react";
import { Link } from 'react-router-dom'

function SingleMenu({text='', link='/', linkText='link', singleMenuMod='', textMod='', linkMod='', onClick='' }) {

  return(
    <nav className={`single-menu ${singleMenuMod}`}>
      <p className={`text ${textMod}`}>{text}</p>
      <Link onClick={onClick} className={`link ${linkMod}`} to={link} >{linkText}</Link>
    </nav>
  );
};

export default SingleMenu;
