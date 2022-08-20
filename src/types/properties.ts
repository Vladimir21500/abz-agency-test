import { IUserInfo, IUserPosition } from "./user";

export interface IHeaderProps {
  moveToUsers: () => void;
  moveToSignUp: () => void;
}

export interface IBannerProps {
  moveToSignUp: () => void;
}

export interface IUsersProps {
  users: IUserInfo[] | [];
  showMore: () => void;
  isLastPageUsers: boolean;
}

export interface IUserCardProps {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
}

export interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
}

export interface IInputProps {
  name: string;
  register: any;
  errors: any;
  value: string;
}

interface IRadioValue {
  id: number;
  name: string;
}

export interface IRadioGroupProps {
  name: string;
  valuesArray: IRadioValue[];
  register: any;
  errors: any;
}

export interface IFileProps {
  name: string;
  register: any;
  errors: any;
}

export interface ISignUpProps {
  positions: IUserPosition[];
  registration: (userData: any) => void;
}
