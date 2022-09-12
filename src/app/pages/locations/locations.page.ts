import { Component, OnInit } from '@angular/core';
import { Camera } from '@awesome-cordova-plugins/camera';
import { Place } from 'src/app/interfaces/place';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations: Array<Place>=[];

  constructor( private camera: Camera) { }

  ngOnInit() {
  }

}

