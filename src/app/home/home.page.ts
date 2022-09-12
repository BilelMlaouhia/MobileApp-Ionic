import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { StorageSqliteService } from '../services/storage-sqlite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  myData: any[]=[];
  mydataFrom: Array<any>=[];
  edit=[];

  constructor(private router: Router, private camera: Camera, private sqliteStorage: StorageSqliteService) {
    this.onCreateDB().then(()=>{
      this.onCreateTable().then(()=>{console.log('from home.ts :DB and table ready');
      this.onGetRows();
      });
    });
  }

  ngOnInit() {
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


  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // Do something with the new photo
        console.log('photo token with success');
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }

}
