import React from "react";
import { IUserCardProps } from "../../types/properties";

import "./userCard.scss";

const defaultPhoto =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";

const UserCard: React.FC<IUserCardProps> = ({
  name,
  email,
  phone,
  position,
  photo,
}) => {
  const formatPhoto = photo.split(".").reverse()[0];

  const cardPhoto =
    formatPhoto === "jpeg" || formatPhoto === "jpg" ? (
      <img className='card__photo' src={photo} alt={`${name} avatar`} />
    ) : (
      <img className='card__photo' src={defaultPhoto} alt={`${name} avatar`} />
    );
  return (
    <div className='card'>
      {cardPhoto}
      <p className='card__name'>{name}</p>
      <div className='card__main-info'>
        <span className='card__position'>{position}</span>
        <span className='card__email'>{email}</span>
        <span className='card__phone'>{phone}</span>
      </div>
    </div>
  );
};

export default UserCard;
