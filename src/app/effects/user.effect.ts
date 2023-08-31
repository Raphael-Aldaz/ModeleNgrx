import { Injectable } from '@angular/core';
import { ApiService } from '../services/ApiService/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import {
  LoginAction,
  LoginActionSuccess,
  UserActionTypes,
} from '../actions/user.action';

@Injectable()
export class UserEffect {
  constructor(private apiService: ApiService, private effectAction: Actions) {}

  loginEffect$ = createEffect(() =>
    this.effectAction.pipe(
      ofType(UserActionTypes.LoginAction),
      mergeMap((action: LoginAction) =>
        this.apiService.login(action.payload).pipe(
          map((response) => {
            const token = response.headers.get('Authorization');
            const stringToken = JSON.stringify(token);
            localStorage.setItem('token', stringToken);

            return new LoginActionSuccess({
              authorization: token,
            });
          })
        )
      )
    )
  );
}
