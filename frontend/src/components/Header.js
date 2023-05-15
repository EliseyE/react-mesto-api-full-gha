import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import headerLogoPath from '../images/logos/header-logo.svg';
import SingleMenuLogIn from "./SingleMenuLogIn";
import SingleMenuLogOut from "./SingleMenuLogOut";
import SingleMenuRegister from "./SingleMenuRegister";
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Header({ onLogOut, isLoggedIn }) {

  const [isHeaderOptionOn, setIsHeaderOptionOn] = useState(false);

  const headerSingleMunuStyle = 'single-menu_place_header';
  const headerSingleMunuStyleLogout = `${headerSingleMunuStyle} single-menu_type_logout`;

  const currentUser = useContext(CurrentUserContext);

  function handleOption() {
    setIsHeaderOptionOn(!isHeaderOptionOn);
  };

  useEffect(() => {
    setIsHeaderOptionOn(false);
  }, [isLoggedIn]);

  return(
  <>
    {(isHeaderOptionOn && isLoggedIn) &&
      <SingleMenuLogOut
        singleMenuMod={'single-menu_place_header-option'}
        onClick={onLogOut}
        textMod={'text_place_header-option'}
        text={currentUser.email}
      />}
    <header className="header page__header">
      <Link to="/" ><img src={headerLogoPath} alt="Место Россия" className="header__logo" /></Link>
        {isLoggedIn &&<SingleMenuLogOut
            singleMenuMod={headerSingleMunuStyleLogout}
            onClick={onLogOut}
            text={currentUser.email}
          />}

      {isLoggedIn &&
        <button
          className={`button-img button-img_type_three-lines header__option-button ${isHeaderOptionOn ? 'button-img_type_x' : ''}`}
          type="button"
          onClick={handleOption}
        /> }
      {!isLoggedIn &&
        <Routes>
          <Route path='sign-up' element={<SingleMenuLogIn singleMenuMod={headerSingleMunuStyle}/>} />
          <Route path='sign-in' element={<SingleMenuRegister singleMenuMod={headerSingleMunuStyle}/>} />
        </Routes>
      }
    </header>
  </>
  );
};

export default Header;
