import { hotelAdaptater } from '../entity/hotel.entity';
import { ResponsePagination } from '../interfaces/hotels.interface';
import { Hotel } from '../models/hotel.model';

export enum HotelStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}
export interface HotelState {
  hotelResponse: ResponsePagination;
  dataState: HotelStateEnum;
}
const hotelResponse: ResponsePagination = {
  content: [],
  pageable: 1,
  last: true,
  totalPages: 1,
  totalElements: 0,
};
export const hotelState: HotelState = {
  hotelResponse,
  dataState: HotelStateEnum.INITIAL,
};
