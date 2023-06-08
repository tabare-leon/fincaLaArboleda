import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../shared/core.module';
import { CabinsService } from '../services/cabins.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    ReservationPageRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [ReservationPage],
  providers: [
    CabinsService,
    NavParams,
    DatePipe,
  ]
})
export class ReservationPageModule {}
