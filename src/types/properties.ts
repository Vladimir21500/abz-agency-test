import { IUserInfo, IUserPosition } from "./user";

export interface IBannerProps {
  moveToSignUp: () => void;
}

export interface IHeaderProps {
  moveToUsers: () => void;
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

export interface ISignUpProps {
  positions: IUserPosition[];
  registration: (userData: any) => void;
}
