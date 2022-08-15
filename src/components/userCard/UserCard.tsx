import React from "react";
import { IUserCardProps } from "../../types/properties";
import "./userCard.scss";

const UserCard: React.FC<IUserCardProps> = ({
  name,
  email,
  phone,
  position,
  photo,
}) => {
  return (
    <div className='card'>
      <img className='card__photo' src={photo} alt={`${name} avatar`} />
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
