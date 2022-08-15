import React from "react";
import { IHeaderProps } from "../../types/properties";
import "./header.scss";

const Header: React.FC<IHeaderProps> = ({ moveToUsers, moveToSignUp }) => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src='Logo.png' alt='logo-cat' />
      </div>
      <nav className='header__navigation'>
        <button className='header__users-btn btn' onClick={moveToUsers}>
          Users
        </button>
        <button className='header__sign-up-btn btn' onClick={moveToSignUp}>
          Sign Up
        </button>
      </nav>
    </div>
  );
};

export default Header;
