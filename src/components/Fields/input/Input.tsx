import React, { useEffect, useState } from "react";
import { IInputProps } from "../../../types/properties";

import "./input.scss";

const Input: React.FC<IInputProps> = ({ name, register, errors, value }) => {
  const [labelClass, setLabelClass] = useState<string>("hidden");

  useEffect(() => {
    if (value) {
      setLabelClass(errors[name] ? "error-label label" : "label");
    } else {
      setLabelClass("hidden");
    }
  }, [value]);

  return (
    <div className='input-container'>
      <input
        className={errors[name] ? "invalid" : ""}
        {...register(name)}
        placeholder={name}
      />
      <label className={labelClass}>{name}</label>
      {errors[name] && (
        <span className='sign-up__error'>{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
