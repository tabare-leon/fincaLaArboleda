import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Booking } from '../interface/ibooking';

@Injectable({
  providedIn: 'root'
})
export class CabinsService {

  constructor(private httpClient: HttpClient) {

  }

  getBookingByCode(bookingCode: string) {
    return this.httpClient.get<Booking>(`https://api-cabins-production.up.railway.app/api-cabins/bookings/${bookingCode}`);
  }
}
