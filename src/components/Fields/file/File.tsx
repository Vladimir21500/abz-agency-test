import React from "react";
import { IFileProps } from "../../../types/properties";

import "./file.scss";

const File: React.FC<IFileProps> = ({ name, register, errors }) => {
  return (
    <>
      <div className='input-file'>
        <input id={name} {...register(name)} type='file' name={name} />
        <label
          className={`input-file__label ${errors[name] ? "invalid" : ""}`}
          htmlFor={name}
        >
          Upload
        </label>
        <span className={`input-file__span ${errors[name] ? "invalid" : ""}`}>
          Upload your file
        </span>
      </div>
      {errors[name] && (
        <span className='sign-up__error'>{errors[name].message}</span>
      )}
    </>
  );
};

export default File;
