import { Component } from "@angular/core";

@Component({
  selector: 'app-card-reservation',
  templateUrl: './card-reservation.component.html',
  styleUrls: ['./card-reservation.component.scss'],
})
export class CardReservationComponent {
  public isOpenModal = false;

  public onTapRate(rating: { rate: number }) {
    console.log('rate', rating);
    this.isOpenModal=true;
  }
}