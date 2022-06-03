import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacoteRoutingModule } from './pacote-routing.module';
import { PacotesComponent } from './pacotes/pacotes.component';


@NgModule({
  declarations: [
    PacotesComponent
  ],
  imports: [
    CommonModule,
    PacoteRoutingModule
  ]
})
export class PacoteModule { }
