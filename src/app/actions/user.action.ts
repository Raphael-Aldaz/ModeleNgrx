import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActionTypes {
  LoginAction = '[User] LoginAction',
  LoginActionSuccess = '[User] LoginActionSuccess',
}
export class LoginAction implements Action {
  readonly type = UserActionTypes.LoginAction;
  constructor(public payload: FormData) {}
}
export class LoginActionSuccess implements Action {
  readonly type = UserActionTypes.LoginActionSuccess;
  constructor(public payload: any) {}
}

export type UserActions = LoginAction | LoginActionSuccess;
