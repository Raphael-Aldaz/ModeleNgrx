import { Hotel } from '../models/hotel.model';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const hotelAdaptater: EntityAdapter<Hotel> = createEntityAdapter<Hotel>({
  selectId: (hotel) => hotel.id,
});
