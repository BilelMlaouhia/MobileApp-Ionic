import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'gallery',
    loadChildren: () => import('../pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('../pages/locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('../pages/meteo/meteo.module').then( m => m.MeteoPageModule)
  }
];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}
