import { Action } from '@ngrx/store';

import { UserState, UserStateEnum, userState } from '../state/user.state';
import { LoginActionSuccess, UserActionTypes } from '../actions/user.action';

export function UserReducer(state: UserState = userState, action: Action) {
  switch (action.type) {
    case UserActionTypes.LoginAction:
      return {
        ...state,
        dataState: UserStateEnum.LOADING,
      };
    case UserActionTypes.LoginActionSuccess:
      return {
        ...state,
        dataState: UserStateEnum.LOADED,
        user: (action as LoginActionSuccess).payload,
        isAuth: true,
      };

    default:
      return state;
  }
}
