import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hotel', loadChildren: () => import('./pages/hotel/hotel.module').then(m => m.HotelModule)
  },

  {
    path: 'viagem', loadChildren: () => import('./pages/viagem/viagem.module').then(m => m.ViagemModule)
  },

  {
    path: 'pacote', loadChildren: () => import('./pages/pacote/pacote.module').then(m => m.PacoteModule)
  },

  {
    path: '', redirectTo: 'hotel', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
