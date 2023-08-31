import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MainComponent } from './components/main/main.component';
import { HotelEffects } from './effects/hotel.effect';
import { Hotelreducer } from './reducers/hotel.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserReducer } from './reducers/user.reducer';
import { FormsModule } from '@angular/forms';
import { UserEffect } from './effects/user.effect';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ hotelState: Hotelreducer, userState: UserReducer }),
    EffectsModule.forRoot([HotelEffects, UserEffect]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
