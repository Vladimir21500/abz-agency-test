import React, { useState, useRef } from "react";
import { ISignUpProps } from "../../types/properties";
import { IUserInfo } from "../../types/user";
import { validationUser } from "../../validation/newUser";
import { IError } from "../../types/error";
import "./signUp.scss";

const SignUp: React.FC<ISignUpProps> = ({ positions, registration }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    position: "1",
    photo: "",
  });
  const [errors, setErrors] = useState<IError>({
    name: "",
    email: "",
    phone: "",
    photo: "",
  });
  const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(false);

  const changeHandler = (
    event: React.SyntheticEvent<HTMLInputElement | HTMLDivElement>
  ): void => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): null => {
    event.preventDefault();
    const errorsObj = validationUser(userInfo);

    if (!Object.values(errorsObj).every((el) => el === "")) {
      setIsDisabledSubmit(true);
      setErrors({
        ...errors,
        ...errorsObj,
      });
      return null;
    }

    setErrors({
      name: "",
      email: "",
      phone: "",
      photo: "",
    });

    const { name, email, phone, position, photo } = userInfo;

    const formData = new FormData();
    formData.append("position_id", position);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("photo", photo);

    registration(formData);
    console.log(userInfo);

    return null;
  };

  const changePhotoHandler = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    const fileField = document.querySelector('input[type="file"]');
    const photo = fileField.files[0];
    setUserInfo({
      ...userInfo,
      photo,
    });
  };

  const { name, email, phone } = userInfo;

  return (
    <div className='sign-up'>
      <h2 className='sign-up__title'>Working with POST request</h2>
      <form className='sign-up__form' onSubmit={submitHandler}>
        <input
          className={errors.name !== "" ? "invalid" : ""}
          onChange={changeHandler}
          name='name'
          type='text'
          value={name}
          placeholder='Your name'
          required
        />
        {errors.name && <span className='sign-up__error'>{errors.name}</span>}
        <input
          className={errors.email !== "" ? "invalid" : ""}
          onChange={changeHandler}
          name='email'
          type='email'
          value={email}
          placeholder='Email'
          required
        />
        {errors.email && <span className='sign-up__error'>{errors.email}</span>}
        <input
          className={errors.phone !== "" ? "invalid" : ""}
          onChange={changeHandler}
          name='phone'
          type='text'
          value={phone}
          placeholder='Phone'
          required
        />
        {errors.phone && <span className='sign-up__error'>{errors.phone}</span>}
        <h5 className='sign-up__select-title'>Select your position</h5>
        <div className='sign-up__select' onChange={changeHandler}>
          {positions.map((position) => (
            <div key={position.id}>
              <input type='radio' value={position.id} name='position' />
              <label>{position.name}</label>
            </div>
          ))}
        </div>
        <div className='sign-up__input-container'>
          <input
            id='photo'
            className={errors.photo !== "" ? "invalid" : ""}
            onChange={changePhotoHandler}
            type='file'
            accept='image/png,image/jpeg'
            required
          />
          <label className='label-for-upload' htmlFor='photo'>
            Upload
          </label>
          <span className='span-for-upload'>Upload your photo</span>
        </div>
        {errors.photo && <span className='sign-up__error'>{errors.photo}</span>}
        <button className='btn' type='submit' disabled={isDisabledSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
