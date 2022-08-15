import React from "react";
import "./registered.scss";

const Registered = () => {
  return (
    <div className='registered'>
      <h3 className='registered__title'>User successfully registered</h3>
      <img
        className='registered__img'
        src='registered.png'
        alt='succesfully registered'
      />
    </div>
  );
};

export default Registered;
