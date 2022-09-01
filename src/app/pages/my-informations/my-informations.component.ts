import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-informations',
  templateUrl: './my-informations.component.html',
  styleUrls: ['./my-informations.component.scss'],
})
export class MyInformationsComponent {

  @Input() myInformations: object;

  constructor(private modalCtrl: ModalController) {
    console.log('from modal '+JSON.stringify(this.myInformations));
  }

  closeMoadal(){
    this.modalCtrl.dismiss();
  }

}
