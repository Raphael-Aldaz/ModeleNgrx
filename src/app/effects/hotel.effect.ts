import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, mergeMap, map } from 'rxjs';
import {
  GetHotelAction,
  GetHotelActionSuccess,
  HotelActionTypes,
} from '../actions/hotel.action';
import { ApiService } from '../services/ApiService/api.service';

@Injectable()
export class HotelEffects {
  constructor(private apiService: ApiService, private effectAction: Actions) {}

  getAllHotelEffect: Observable<Action> = createEffect(() =>
    this.effectAction.pipe(
      ofType(HotelActionTypes.GetHotelAction),
      mergeMap((action: GetHotelAction) => {
        return this.apiService
          .getAllHotels(action.page)
          .pipe(map((hotel) => new GetHotelActionSuccess(hotel)));
      })
    )
  );
}
