import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from "./Card";

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, updateData }) {

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    updateData();
  }, []);

  return(
    <main className="content page__content page__side-space">
      <section className="profile" aria-label="Профайл">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img
            className="profile__avatar-image"
            src={currentUser.avatar}
            alt="Аватар профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="collection" aria-label="Фотогалерея">
        <ul className="collection__item-list">
        {
          cards.map((data) => (
            <Card
              key={data._id}
              card={data}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete} />))
        }
        </ul>
      </section>
    </main>
  );
};

export default Main;
