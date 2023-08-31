import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HotelState } from '../state/hotel.state';

export const selectHotelFeature =
  createFeatureSelector<HotelState>('hotelState');

export const selectAllHotels = createSelector(
  selectHotelFeature,
  (hotelState) => hotelState.hotelResponse.content
);
