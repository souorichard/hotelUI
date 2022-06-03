import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoteisComponent } from './hoteis/hoteis.component';

const routes: Routes = [
  {
    path: '', component: HoteisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
