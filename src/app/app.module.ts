import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import {  SQLite } from '@awesome-cordova-plugins/sqlite/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Camera,
    SQLite,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
