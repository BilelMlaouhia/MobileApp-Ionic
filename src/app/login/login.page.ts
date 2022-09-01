import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, CheckboxChangeEventDetail } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  checkBox=false;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.checkBox=false;
   }

  ngOnInit() {
  }
  onLogin(val: any){
    this.authService.login(val);
  }
  showMenu(){
    this.router.navigateByUrl('/home');
  }
  checked(){
    const inp= document.getElementsByTagName('input')[1];
    this.checkBox= !this.checkBox;
    if(this.checkBox){
      inp.type='text';
    }else{
     inp.type='password';
    }
  }
}

