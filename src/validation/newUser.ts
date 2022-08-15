import { IUserInfo } from "../types/user";
import { IError } from "../types/error";

const nameValidation = (name: string): IError | null => {
  if (name.length < 2 || name.length > 60) {
    return {
      name: "too long or too short",
    };
  }
  if (name.length === 0) {
    return {
      name: "field is empty",
    };
  }
  return {};
};

const emailValidation = (email: string) => {
  const regularEx =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  if (regularEx.test(String(email).toLowerCase()) === false) {
    return {
      email: "invalid email",
    };
  }
  return {};
};

const phoneValidation = (phone: string) => {
  const regularEx = /^[\+]{0,1}380([0-9]{9})$/;
  if (regularEx.test(String(phone).toLowerCase()) === false) {
    return {
      phone: "invalid phone",
    };
  }
  return {};
};

export const validationUser = (userInfo: IUserInfo): IError | {} => {
  const errors = {};
  const { name, email, phone, photo } = userInfo;
  return Object.assign(
    errors,
    nameValidation(name),
    emailValidation(email),
    phoneValidation(phone)
  );
};
