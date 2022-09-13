import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng, Marker, MarkerOptions } from '@ionic-native/google-maps';
import { LocationsService } from 'src/app/services/locations.service';
import { StorageSqliteService } from 'src/app/services/storage-sqlite.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit, AfterContentInit {
  @ViewChild('map') div;
  myData: any[]=[];
  mydataFrom: Array<any>=[];
  edit=[];

  constructor(private router: Router, private sqliteStorage: StorageSqliteService,
    private locationServive: LocationsService, private googleMaps: GoogleMaps) {
    this.onCreateDB().then(()=>{
      this.onCreateTable().then(()=>{console.log('from home.ts :DB and table ready');
      this.onGetRows();
      });
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.onGetCurrentLocaiton();
  }

  onEdit(i: number){
    this.edit[i] = !this.edit[i];
  }

  async onCreateDB(){
   await this.sqliteStorage.createDB();
  }

 async onCreateTable(){
   await this.onCreateDB();
   await this.sqliteStorage.createTable();
  }

   onGetRows(){
    this.sqliteStorage.getDataFromDB().then(q=>{
      if(q.rows.length>0){
        this.myData =[];
        for(let i = 0; i< q.rows.length; i++){
          console.log('data from table '+JSON.stringify( q.rows.item(i).name));
          this.myData.push(q.rows.item(i));
          this.edit[i]=false;
      }
      }else {
        this.myData=[];
      }
  });
  }

 onInsertRow(val: string): void{
  this.sqliteStorage.insertIntoTable(val);
  this.onGetRows();
 }

 onDelelteItem(id: number){
  this.sqliteStorage.deleteFromDB('favFramework',id).then(()=>{
    console.log('item deleted successfully');
  });
  this.onGetRows();
 }

 onUpdateItem(newVal: string, id: number){
  this.sqliteStorage.updateFromDB(newVal,id).then(()=>{console.log('item updated successfully');
  });
  this.onEdit(id);
  this.onGetRows();
 }

 onGetCurrentLocaiton(){
  this.locationServive.getCurrentLocation().then((resp) => {
    console.log('coord latitude: '+resp.coords.latitude+' longtitude: '+resp.coords.longitude+' api key: '+environment.apiKey);
  this.onInitMaps(this.div,resp.coords.latitude,resp.coords.longitude);
  }).catch((error) => {
     console.log('Error getting location', error);
   });
 }

 onInitMaps(child: any, lat: number, lng: number){
  this.locationServive.initMap(child,lat,lng);
 }

//  initMap(lat: number, lng: number) {

//   const map: GoogleMap = GoogleMaps.create(this.div.nativeElement);

//   map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

//     const coordinates: LatLng = new LatLng(lat, lng);

//     const position = {
//       target: coordinates,
//       zoom: 17
//     };

//     map.animateCamera(position);

//     const markerOptions: MarkerOptions = {
//       position: coordinates,
//      // icon: "assets/images/icons8-Marker-64.png",
//       title: 'Our first POI'
//     };

//     const marker = map.addMarker(markerOptions)
//       .then((mark: Marker) => {
//         mark.showInfoWindow();
//     });
//   });
// }

}

