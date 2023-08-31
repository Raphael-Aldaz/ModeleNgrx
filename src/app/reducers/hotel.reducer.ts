import { Action } from '@ngrx/store';
import { HotelState, HotelStateEnum, hotelState } from '../state/hotel.state';
import {
  GetHotelActionSuccess,
  HotelActionTypes,
} from '../actions/hotel.action';
import { hotelAdaptater } from '../entity/hotel.entity';

export function Hotelreducer(state: HotelState = hotelState, action: Action) {
  switch (action.type) {
    case HotelActionTypes.GetHotelAction:
      return {
        ...state,
        dataState: HotelStateEnum.LOADING,
      };
    case HotelActionTypes.GetHotelActionSuccess:
      return {
        ...state,
        dataState: HotelStateEnum.LOADED,
        hotelResponse: (action as GetHotelActionSuccess).payload,
      };

    default:
      return state;
  }
}
