import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
    auth=false;
  menuList=[
    {title:'home',url:'/home',icon:'home-outline'},
    {title:'about me',url:'/about-me',icon:'person-outline'}
  ];
  authList=[
    {title:'meteo',url:'/login/meteo',icon:'sunny-outline'},
    {title:'gallory',url:'/login/gallory',icon:'images-outline'},
    {title:'locations',url:'/login/locations',icon:'locate-outline'},
    {title:'logout',url:'/logout',icon:'log-out-outline'}
  ];
   loginLInk= {title:'login',url:'/login',icon:'log-in-outline'};

  constructor(private platform: Platform, private router: Router, private authService: AuthenticationService) {
    this.authService.auth.subscribe(res=>{
      this.auth=res;
      console.log('auth: '+res);

    });
  }


  initializeApp(){
    this.platform.ready().then(()=>{
      this.login();
    });
  }

  login(){
    this.router.navigateByUrl('/home');
  }
  onGetMenu(url: string){
    if(url==='/logout'){
      this.onLogout();
    }else{
      this.router.navigateByUrl(url);
    }
  }

  onLogout(){
    this.authService.auth.next(false);
    this.router.navigateByUrl('/login');
  }

}
