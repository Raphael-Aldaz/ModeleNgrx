import { User } from '../models/user.model';

export enum UserStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}
export interface UserState {
  user: User;
  dataState: UserStateEnum;
  isAuth: boolean;
}

export const userState: UserState = {
  user: new User(0, '', ''),
  isAuth: false,
  dataState: UserStateEnum.INITIAL,
};
