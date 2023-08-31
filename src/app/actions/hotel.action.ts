import { Action } from '@ngrx/store';
import { Hotel } from '../models/hotel.model';
import { ResponsePagination } from '../interfaces/hotels.interface';

export enum HotelActionTypes {
  GetHotelAction = '[Hotel] GetHotelAction',
  GetHotelActionSuccess = '[Hotel] GetHotelActionSuccess',
}
export class GetHotelAction implements Action {
  readonly type = HotelActionTypes.GetHotelAction;
  constructor(public page: number) {}
}

export class GetHotelActionSuccess implements Action {
  readonly type = HotelActionTypes.GetHotelActionSuccess;

  constructor(public payload: ResponsePagination) {}
}

export type HotelActions = GetHotelAction | GetHotelActionSuccess;
