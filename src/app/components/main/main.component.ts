import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetHotelAction } from 'src/app/actions/hotel.action';
import { map, Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelState } from 'src/app/state/hotel.state';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environment/environment';
import { LoginAction, UserActionTypes } from 'src/app/actions/user.action';
import { selectAllHotels } from 'src/app/selector/hotel.selector';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { JwtToken } from 'src/app/interfaces/hotels.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  hotelList$!: Observable<Hotel[]>;
  pictureUrl: string = environment.host;
  totalHotels!: number;
  login!: string;
  password!: string;

  constructor(private store: Store<any>, private authService: AuthService) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const token = this.authService.getToken();
    if (token) {
      if (typeof token.exp === 'number') {
        const expirationTimestamp = token.exp * 1000;
        const timeTarget = expirationTimestamp - currentDate.getTime();
        console.log(new Date(timeTarget * 1000));
      } else {
        console.error("Le type de token.exp n'est pas un nombre.");
      }
    }
  }

  getHotel(page: number) {
    this.store.dispatch(new GetHotelAction(page));
    this.hotelList$ = this.store.select(selectAllHotels);

    this.store
      .select((state) => state.hotelState.hotelResponse.totalElements)
      .subscribe((totalElements: number) => {
        this.totalHotels = totalElements;
      });

    console.log(this.store.select(selectAllHotels), 'selector');
  }

  onChange(e: PageEvent) {
    this.getHotel(e.pageIndex);
  }

  onSubmit() {
    const user = new FormData();
    user.append('username', this.login);
    user.append('password', this.password);
    this.store.dispatch(new LoginAction(user));
    this.authService.getToken();
    console.log(this.login, this.password);
  }
}
