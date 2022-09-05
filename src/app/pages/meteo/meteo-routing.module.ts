import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteoPage } from './meteo.page';

const routes: Routes = [
  {
    path: '',
    component: MeteoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteoPageRoutingModule {}
