import React from "react";
import { IBannerProps } from "../../types/properties";

import "./banner.scss";

const Banner: React.FC<IBannerProps> = ({ moveToSignUp }) => {
  return (
    <div className='banner'>
      <h2 className='banner__title'>Test assignment for front-end developer</h2>
      <p className='banner__article'>
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
        understanding of User design thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
      </p>
      <button className='banner__btn btn' onClick={moveToSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default Banner;
