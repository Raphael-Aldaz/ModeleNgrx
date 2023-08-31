import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { JwtToken } from 'src/app/interfaces/hotels.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  DecodeToken(token: string): any {
    return jwt_decode(token);
  }
  getToken(): JwtToken | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.DecodeToken(token);
      return decodedToken;
    } else {
      return null;
    }
  }
}
