import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteoPageRoutingModule } from './meteo-routing.module';

import { MeteoPage } from './meteo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteoPageRoutingModule
  ],
  declarations: [MeteoPage]
})
export class MeteoPageModule {}
