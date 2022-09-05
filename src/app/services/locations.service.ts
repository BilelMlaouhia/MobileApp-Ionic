import { Injectable } from '@angular/core';
import { Place } from '../interfaces/place';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private locations: Array<Place>=[];

  constructor() { }

  public getAllLocations(): Place[]{
    return this.locations;
  }

  public addNewLocation(loc: Place): void{
    this.locations.push(loc);
    console.log('location '+ JSON.stringify(loc)+' added successfully');
  }

  public removeLocation(loc: Place): void{
       const i =  this.locations.indexOf(loc);
        this.locations.splice(i,1);
  }

}
