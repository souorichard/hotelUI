import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagemRoutingModule } from './viagem-routing.module';
import { VoosComponent } from './voos/voos.component';


@NgModule({
  declarations: [
    VoosComponent
  ],
  imports: [
    CommonModule,
    ViagemRoutingModule
  ]
})
export class ViagemModule { }
