import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../shared/core.module';

@NgModule({
  imports: [
    ReservationPageRoutingModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [ReservationPage]
})
export class ReservationPageModule {}
