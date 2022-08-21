import React from "react";
import { IFileProps } from "../../../types/properties";

import "./file.scss";

const File: React.FC<IFileProps> = ({ name, register, errors }) => {
  return (
    <>
      <div className='input-file-container'>
        <input id={name} {...register(name)} type='file' name={name} />
        <label className={`input-file-container__label ${errors[name] ? "invalid" : ""}`} htmlFor={name}>
          Upload
        </label>
        <span className={`input-file-container__span ${errors[name] ? "invalid" : ""}`}>
          Upload your file
        </span>
      </div>
      {errors[name] && <span className='sign-up__error'>{errors[name].message}</span>}
    </>
  );
};

export default File;
