import { Component, OnInit } from '@angular/core';
import { CameraOptions, Camera } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private camera: Camera ,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  public takePicture(){
    this.camera.getPicture().then(imgData=>{

    }).catch(err=>console.log('error camera: '+err)
    );
  }

}
