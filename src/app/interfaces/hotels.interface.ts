import { Hotel } from '../models/hotel.model';

export interface ResponsePagination {
  content: Hotel[];
  pageable: number;
  last: boolean;
  totalPages: number;
  totalElements: number;
}
export interface JwtToken {
  exp: number;
  roles: string[];
  sub: string;
}
