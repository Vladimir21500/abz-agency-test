import React from "react";
import { IRadioGroupProps } from "../../../types/properties";

import "./radioGroup.scss";

const RadioGroup: React.FC<IRadioGroupProps> = ({
  name,
  valuesArray,
  register,
  errors,
}) => {
  return (
    <>
      <div className='radio-group'>
        {valuesArray.map((value) => (
          <div key={value.id}>
            <input
              id={`${value.id}`}
              {...register(name)}
              type='radio'
              value={value.id}
              name={name}
            />
            <label htmlFor={`${value.id}`}>{value.name}</label>
          </div>
        ))}
      </div>
      {errors[name] && (
        <span className='sign-up__error'>{errors[name].message}</span>
      )}
    </>
  );
};

export default RadioGroup;
