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
    toggleCheked=false;
    m='sunny';
  menuList=[
    {title:'home',url:'/home',icon:'home'},
    {title:'about me',url:'/about-me',icon:'information-circle'}
  ];
  authList=[
    {title:'meteo',url:'/login/meteo',icon:'sunny'},
    {title:'gallery',url:'/login/gallery',icon:'images'},
    {title:'locations',url:'/login/locations',icon:'locate'},
    {title:'logout',url:'/logout',icon:'log-out'}
  ];
   loginLInk= {title:'login',url:'/login',icon:'log-in'};

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

  onChangeTheme(event){
    if(event.detail.checked ){
      document.body.classList.add('dark');
      this.m='moon';
    }else{
      document.body.classList.remove('dark');
      this.m='sunny';
    };
    // console.log('event stringify : '+JSON.stringify(event.detail.checked));
    // console.log('event : '+event.detail.checked);
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
