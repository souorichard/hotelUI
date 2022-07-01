import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HoteisComponent } from './hoteis/hoteis.component';
import { InternacionalComponent } from './hoteis/internacional/internacional.component';
import { NacionalComponent } from './hoteis/nacional/nacional.component';

const routes: Routes = [
  {
    path: '', component: HoteisComponent
  },

  {
    path: 'nacional', component: NacionalComponent
  },

  {
    path: 'internacional', component: InternacionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
