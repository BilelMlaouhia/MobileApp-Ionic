import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GalloryComponent } from '../pages/gallory/gallory.component';
import { LocationsComponent } from '../pages/locations/locations.component';
import { MeteoComponent } from '../pages/meteo/meteo.component';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path:'gallory',
    component: GalloryComponent,

  },
  {
    path:'locations',
    component: LocationsComponent
  },
  {
    path:'meteo',
    component: MeteoComponent
  }
];

@NgModule({
  declarations:[
    MeteoComponent,
    LocationsComponent,
    GalloryComponent
  ],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}
