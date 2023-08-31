import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePagination } from 'src/app/interfaces/hotels.interface';
import { Hotel } from 'src/app/models/hotel.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllHotels(page: number) {
    return this.http.get<ResponsePagination>(
      environment.host + '/hotels?page=' + page
    );
  }
  public login(user: FormData) {
    return this.http.post('http://localhost:8080/login', user, {
      observe: 'response',
    });
  }
}
