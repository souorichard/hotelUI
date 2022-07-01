import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HoteisComponent } from './hoteis/hoteis.component';
import { NacionalComponent } from './hoteis/nacional/nacional.component';
import { InternacionalComponent } from './hoteis/internacional/internacional.component';

@NgModule({
  declarations: [
    HoteisComponent,
    NacionalComponent,
    InternacionalComponent,
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
