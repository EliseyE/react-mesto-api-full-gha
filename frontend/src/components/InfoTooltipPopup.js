import React from "react";
import Popup from "./Popup";

function InfoTooltipPopup({isOpen, onClose, res, image}) {

  return(
    <Popup name={'infoTooltip'} isOpen={isOpen} onClose={onClose}>
      <div className="infoTooltip">
        <img
          src={image}
          alt=""
          className="infoTooltip__image infoTooltip__image_size_normal"
        />
        <h1 className="infoTooltip__message">
          {res.resText}
        </h1>
      </div>
    </Popup>
  );
}

export default InfoTooltipPopup;
