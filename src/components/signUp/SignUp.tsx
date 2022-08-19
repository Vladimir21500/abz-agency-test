import React, { useState, useRef, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../validation/newUser";
import { ISignUpProps, IFormInputs } from "../../types/properties";

import "./signUp.scss";

const SignUp: React.FC<ISignUpProps> = ({ positions, registration }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const changePhotoHandler = (event: any) => {
    const uploadSpanElem = document.querySelector(".span-for-upload");

    const target = event.target as HTMLInputElement;
    uploadSpanElem.innerHTML = target.files[0].name;
  };

  useEffect(() => {
    const inputFile = document.querySelector("input[type='file'");
    inputFile.addEventListener("change", changePhotoHandler);
    return () => {
      inputFile.removeEventListener("change", changePhotoHandler);
    };
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
    const formData = new FormData();

    formData.append("position_id", data.position);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", data.photo[0]);

    registration(formData);
  };

  return (
    <div className='sign-up'>
      <h2 className='sign-up__title'>Working with POST request</h2>
      <form className='sign-up__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.name ? "invalid" : ""}
          id='name'
          {...register("name")}
          placeholder='name'
        />
        {errors.name && (
          <span className='sign-up__error'>{errors.name.message}</span>
        )}
        <input
          className={errors.email ? "invalid" : ""}
          {...register("email")}
          placeholder='email'
        />
        {errors.email && (
          <span className='sign-up__error'>{errors.email.message}</span>
        )}
        <input
          className={errors.phone ? "invalid" : ""}
          {...register("phone")}
          placeholder='phone'
        />
        {errors.phone ? (
          <span className='sign-up__error'>{errors.phone.message}</span>
        ) : (
          <span className='sign-up__prompt'>+38 (XXX) XXX - XX - XX</span>
        )}
        <h5 className='select-title'>Select your position</h5>
        <div className='select'>
          {positions.map((position) => (
            <div key={position.id}>
              <input
                {...register("position")}
                type='radio'
                value={position.id}
                name='position'
              />
              <label>{position.name}</label>
            </div>
          ))}
        </div>
        {errors.position && (
          <span className='sign-up__error'>{errors.position.message}</span>
        )}

        <div className='sign-up__input-file-container'>
          <input id='photo' {...register("photo")} type='file' name='photo' />
          <label
            className={`label-for-upload ${errors.photo ? "invalid" : ""}`}
            htmlFor='photo'
          >
            Upload
          </label>
          <span className={`span-for-upload ${errors.photo ? "invalid" : ""}`}>
            Upload your file
          </span>
        </div>
        {errors.photo && (
          <span className='sign-up__error'>{errors.photo.message}</span>
        )}
        <button className='btn' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
