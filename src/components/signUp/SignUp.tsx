import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../fields/input/Input";
import RadioGroup from "../fields/radioGroup/RadioGroup";
import File from "../fields/file/File";

import { validationSchema } from "../../validation/newUser";
import { ISignUpProps, IFormInputs } from "../../types/properties";

import "./signUp.scss";

const SignUp: React.FC<ISignUpProps> = ({ positions, registration }) => {
  const {
    formState: { errors, isValid },
    register,
    getValues,
    handleSubmit,
  } = useForm<IFormInputs>({
    defaultValues: {
      position: "1",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const changePhotoHandler = (event: any) => {
    document.querySelector(".input-file-container__span").innerHTML = event.target.files[0].name;
  };

  useEffect(() => {
    const inputFile = document.querySelector("input[type='file'");

    inputFile.addEventListener("change", changePhotoHandler);

    return () => {
      inputFile.removeEventListener("change", changePhotoHandler);
    };
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
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
        <Input name='name' register={register} errors={errors} value={getValues().name}></Input>
        <Input name='email' register={register} errors={errors} value={getValues().email}></Input>
        <Input name='phone' register={register} errors={errors} value={getValues().phone}></Input>
        {!errors.phone && <span className='sign-up__prompt'>+38 (XXX) XXX - XX - XX</span>}

        <h5 className='radio-group-title'>Select your position</h5>
        <RadioGroup name='position' valuesArray={positions} register={register} errors={errors} />

        <File name='photo' register={register} errors={errors} />

        <button className='btn' type='submit' disabled={!isValid}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
