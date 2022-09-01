import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { MyInformationsComponent } from '../pages/my-informations/my-informations.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit, AfterViewInit{

  public bilel={
    name:'Mlaouhia Bilel',
    email:'bilelmlawhia@gmail.com',
    tel:'002162060683',
    adress:'Tunis, Tunisia',
    speciality:'Full Stack Developer',
    technologies:['JavaScript','Java ','NodeJs','Oracle','MongoDB','SQL','PlSql'],
    frameworks:['spring','Angular','express','Ionic','bootstrap'],
    architecture:['mvc','mvc2','MVVM','monolotique','micro-service'],
    designPattern:['factory','abstract factory','adaptor','composite','IoC','DI']
  };

  constructor(private router: Router, private modalCtrl: ModalController, private alertCtrl: AlertController) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.onAlert();
  }

  async onAlert(){
    const alert = await this.alertCtrl.create({
      header:'Tips',
      message:'By clicking you get more informations if you need to!',
      buttons:['Deal ;)']
    });
    await alert.present();
  }

  public contactMe(){
    console.log('from here you contact me');
    //window.location.href = 'mailto:bilelmlawhia@gmail.com';
    window.open('https://mailto:bilelmlawhia@gmail.com','_system');
  }

  public callMe(){
    console.log('from here you call me');
    window.open('tel:0021620606983','_system');
  }

  public visit(){
    console.log('a modal should show my details');
  }

  public movingBack(){
    this.router.navigateByUrl('/home');
  }

  public async openInformations(){
   const modal = await this.modalCtrl.create({
      component: MyInformationsComponent,
      componentProps:{myInformations:this.bilel}
    });
    await modal.present();
  }


}
