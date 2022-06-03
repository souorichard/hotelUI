import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoosComponent } from './voos/voos.component';

const routes: Routes = [
  {
    path: '', component: VoosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViagemRoutingModule { }
