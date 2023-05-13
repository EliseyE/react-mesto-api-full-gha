import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { apiModule } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { IsLoadingContext } from '../contexts/IsLoadingContext';
import { LastResponseStatusContext } from '../contexts/LastResponseStatusContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPlaceDeletingPopup from './ConfirmPlaceDeletingPopup';
import InfoTooltipPopup from './InfoTooltipPopup';
import Login from './Login';
import Register from './Register';
import * as authApi from "../utils/authApi";
import Spinner from './Spinner';

import registerIsOk from '../images/infoTooltipPopup__image-ok.svg';
import registerIsFail from '../images/infoTooltipPopup__image-fail.svg';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState({name: '', about: '', avatar: '', _id: '', cohort: ''});
  const [userEmail, setUserEmail] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmDeletingCardPopupOpen, setIsConfirmDeletingCardPopupOpen] = useState({isOpen: false, card: {}});
  const [selectedCard, setSelectedCard] = useState({isOpen: false, card: {}});
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [lastResponseStatus, setLastResponseStatus] = useState({resStatus: false, resStatusCode: 'blank', resText: 'Нет данных результата ответа сервера'});
  const [InfoTooltipPopupImage, setInfoTooltipPopupImage] = useState('');

  const navigate = useNavigate();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setIsPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setIsPopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setIsPopupOpen(true);
  };

  function handleDeletePlaceClick(card) {
    setIsConfirmDeletingCardPopupOpen({...isConfirmDeletingCardPopupOpen, isOpen: true, card: card});
    setIsPopupOpen(true);
  };

  function handleInfoTooltipPopupImage() {
    setInfoTooltipPopupImage(lastResponseStatus.resStatus  ? registerIsOk : registerIsFail)
  }

  function handleInfoTooltipPopupOpen() {
    console.log(lastResponseStatus);

    handleInfoTooltipPopupImage();
    console.log(InfoTooltipPopupImage);
    setIsInfoTooltipPopupOpen(true);
    console.log(InfoTooltipPopupImage);

    setIsPopupOpen(true);
  };

  function closeAllPopups() {
    setIsPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({...selectedCard, isOpen: false});
    setIsConfirmDeletingCardPopupOpen({...isConfirmDeletingCardPopupOpen, isOpen: false, card: {}});
    setIsInfoTooltipPopupOpen(false);
  };

  function handleCardClick(card) {
    setSelectedCard({...selectedCard, isOpen: true, card: card});
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    apiModule.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards(state => state.map(с => с._id === card._id ? newCard : с));
      })
      .catch(err => console.log(err));
  };

  function handleCardDelete(card) {
    setIsLoading(true);
    apiModule.deletCard(card._id)
      .then(() => {
        setCards(cards => cards.filter(item => item._id !== card._id));
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        closeAllPopups();
        document.removeEventListener('keydown', handleEscapeKey);
      }
    };

    if(isPopupOpen)
      document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isPopupOpen]);

  function handleUpdateUser(userInfo) {
    setIsLoading(true);
    apiModule.uploadUserInfo(userInfo)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  function handleUpdateAvatar(userAvatar) {
    setIsLoading(true);
    apiModule.uploadAvatar({avatar: userAvatar})
      .then(res => {
        setCurrentUser({...currentUser, avatar: res.avatar});
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    apiModule.uploadCard(card)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

// API AUTH

  // REGISTER
  const handleRegister = useCallback( async (regData) => {
    try {
      const res = await authApi.register(regData);
      setLastResponseStatus({...lastResponseStatus, resStatus: res.resValues.ok, resStatusCode: res.resValues.status, resText: 'Вы успешно зарегистрировались!'});
      setInfoTooltipPopupImage(lastResponseStatus.resStatus  ? registerIsOk : registerIsFail)
      navigate('/sign-in', { replace: true });
    } catch (err) {
      setLastResponseStatus({...lastResponseStatus, resStatus: err.resValues.ok, resStatusCode: err.resValues.status, resText: err.resData.error});
      setInfoTooltipPopupImage(lastResponseStatus.resStatus  ? registerIsOk : registerIsFail)
    } finally {
      setTimeout(() => {
        handleInfoTooltipPopupOpen();
      }, 300);
    }
  }, [lastResponseStatus]);

  //CHECH TOKEN
  const tokenCheck = useCallback( async () => {
    try {
      const JWT = localStorage.getItem('JWT');
      if(!JWT)
        throw new Error('JWT is empty');
      const res = await authApi.getContent(JWT);
      if(res) {
        setUserEmail(res.resData.data.email);
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

  // AUTHORIZE
  const handleAuthorize = useCallback( async (token) => {
    localStorage.setItem('JWT', token);
    setIsLoggedIn(true);
    navigate('/', {replace: true});
    tokenCheck();
  }, [tokenCheck]);

  // LOGIN
  const handleLogin = useCallback( async (loginData) => {
    setLoading(true);
    try {
      const res = await authApi.authorize(loginData);
      if(res.resData.token) {
        handleAuthorize(res.resData.token);
      }
    } catch (err) {
      setLastResponseStatus({...lastResponseStatus, resStatus: err.resValues.ok, resStatusCode: err.resValues.status, resText: err.resData.message});
      setTimeout(() => {
        handleInfoTooltipPopupOpen();
      }, 300);
      } finally {
        setLoading(false);
      }
  }, [handleAuthorize]);

  // UPDATE CONTENT: USER, CARDS
  const updateData = useCallback( () => {

        apiModule.getMyProfileData()
        .then(res => {
          setCurrentUser({ ...currentUser, ...res });
        })
        .catch(err => console.log(err));

        apiModule.getInitialCards()
          .then(res => setCards(res) )
          .catch(err => console.log(err));

  }, [isLoggedIn, currentUser]);

  function LogOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('JWT');
  };

  // LOADING SPINNER
  if(loading)
    return <Spinner />;

    return (

    <CurrentUserContext.Provider value={currentUser}>
      <IsLoadingContext.Provider value={isLoading}>
        <LastResponseStatusContext.Provider value={lastResponseStatus.resStatus}>
          <Header onLogOut={LogOut} isLoggedIn={isLoggedIn} userEmail={userEmail}/>
          <Routes>
            <Route
              path='/sign-up'
              element={isLoggedIn ? <Navigate to="/" replace /> :
              <Register
                onRegister={handleRegister}
                resStatus={lastResponseStatus.resStatus}
              />}
            />
            <Route path='/sign-in' element={isLoggedIn ? <Navigate to="/" replace /> : <Login logIn={handleLogin} />} />
            <Route path='/' element={
              <>
                <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    component={Main}
                      cards={cards}
                      onEditAvatar={handleEditAvatarClick}
                      onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                      onCardDelete={handleDeletePlaceClick}
                      updateData={updateData}
                />
                <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    component={Footer}
                />
              </>}
            />
            <Route path="/*" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/sign-in" replace />} />
          </Routes>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <ConfirmPlaceDeletingPopup
            isOpen={isConfirmDeletingCardPopupOpen.isOpen}
            card={isConfirmDeletingCardPopupOpen.card}
            onClose={closeAllPopups}
            onDeletePlace={handleCardDelete}
          />

          <ImagePopup
            name={'image'}
            card={selectedCard.card}
            isOpen={selectedCard.isOpen}
            onClose={closeAllPopups}
          />

          <InfoTooltipPopup
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeAllPopups}
            res={lastResponseStatus}
            image={InfoTooltipPopupImage}
          />
        </LastResponseStatusContext.Provider>
      </IsLoadingContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
