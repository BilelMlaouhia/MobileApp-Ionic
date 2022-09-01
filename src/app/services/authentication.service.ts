import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public auth: Subject<boolean>= new Subject();
  admin={
    email:'bilel@gmail.com',
    password:'1234'
  };
  constructor(private router: Router, private alertCrtl: AlertController) { }
  login(val: any){
    if(val.email===this.admin.email && val.password===this.admin.password){
      this.auth.next(true);
      this.router.navigateByUrl('/home');
    }else{
      this.wrongPasswordAlert();
      this.auth.next(false);
    }
  }
  async wrongPasswordAlert(){
    const alert= await this.alertCrtl.create({
      header: 'Auth Error',
      message: 'email or password incorrect !!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
