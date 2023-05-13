import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`photoCard__like-button ${isLiked && 'photoCard__like-button_active'}`);
  const isOwn = card.owner._id === currentUser._id;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleTrashClick() {
    onCardDelete(card);
  }

  return(
    <li className="photoCard">
      <img src={card.link}
        alt={card.name}
        className="photoCard__image"
        onClick={handleCardClick}
      />
      <div className="photoCard__info">
        <h2 className="photoCard__description">{card.name}</h2>
        <div className="photoCard__like">
          <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button" />
          <span className="photoCard__like-counter">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && <button onClick={handleTrashClick} className="photoCard__trash-button" type="button" />}
    </li>
  );
};

export default Card;
