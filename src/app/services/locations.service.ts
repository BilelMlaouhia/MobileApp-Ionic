import { Injectable } from '@angular/core';
import { Place } from '../interfaces/place';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private locations: Array<Place>=[];

  constructor(private storageService: StorageService) { }

  // public getAllLocations(): Place[]{
  //   this.locations=[];
  //   this.storage.getItem('myLocations').then(data=>{
  //     this.locations=data;
  //     return this.locations;
  //   }).catch(err=>{
  //     console.log('error getting myLocations '+err);
  //   });
  //   return null;
  // }

  // public addNewLocation(loc: Place): void{
  //  if(this.getAllLocations()!== null) {
  //   this.getAllLocations().forEach(l=>{
  //     this.locations.push(l);
  //   });}
  //   this.locations.push(loc);
  //   this.storage.remove('myLocations').then(res=>{
  //     this.storage.setItem('myLocations',this.locations).then(data=>{
  //       console.log('location '+ data+' added successfully');
  //     });
  //   }).catch(err=>console.log('error removing while adding')
  //   );
  // }

  // public removeLocation(loc: Place): void{
  //   this.locations=this.getAllLocations();
  //      const i =  this.locations.indexOf(loc);
  //       this.locations.splice(i,1);
  //       this.storage.remove('myLocations').then(res=>{
  //         this.storage.setItem('myLocations',this.locations).then(data=>{
  //           console.log('location '+ data+' added successfully');
  //         });
  //       }).catch(err=>console.log('error removing while adding')
  //       );
  // }

  onSetItemTostorage(item: any, itemName: string){
    this.storageService.setItemInNativeStorage(item, itemName);
  }

  onGetItemFromStorage(itemName: string): any{
    return this.storageService.getItemFromNativeStorage(itemName);
  }

  onGetAllItemsFromStorage(): any[]{
    return this.storageService.getAllItemsFromNativeStorage();
  }

  onRemoveItem(item: string): void{
    this.storageService.removeItemFromNativeStorag(item);
  }

  onclearAllItems(): void{
    this.storageService.clearNativeStorage();
  }

}
