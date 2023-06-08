import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CabinsService } from '../services/cabins.service';
import { Booking } from '../interface/ibooking';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  constructor(private router: Router, private service: CabinsService) { }

  public booking!: Booking;

  ngOnInit() {
    console.log("ngOnInit");
    this.getBookingByCode()
  }

  backToHome() {
    this.router.navigate(['/home'])
  }

  goToPqrs() {
    this.router.navigate(['/pqrs'])
  }

  callSupport() {
    console.log('on tap callSupport');
  }

  getBookingByCode() {
    this.service.getBookingByCode("ABC123").subscribe({
      next: (response) => {
        console.log(response);
        this.booking = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
