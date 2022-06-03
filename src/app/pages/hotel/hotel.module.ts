import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HoteisComponent } from './hoteis/hoteis.component';


@NgModule({
  declarations: [
    HoteisComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
