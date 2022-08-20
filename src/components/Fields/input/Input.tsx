import React from "react";
import { IInputProps } from "../../../types/properties";

import "./input.scss";

const Input: React.FC<IInputProps> = ({ name, register, errors }) => {
  return (
    <>
      <input
        className={errors[name] ? "invalid" : ""}
        {...register(name)}
        placeholder={name}
      />
      {errors[name] && (
        <span className='sign-up__error'>{errors[name].message}</span>
      )}
    </>
  );
};

export default Input;
