import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/place';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations: Array<Place>=[];

  constructor(private locationService: LocationsService) { }

  ngOnInit() {
    this.locations=this.onGetAllLocations();
  }

  public onAddNewLocation(t: any): void{
    console.log('title is : '+t.title);

    const loc: Place={
      title:t.title
    };
    this.locationService.addNewLocation(loc);
  }

  public onGetAllLocations(): Place[]{
    return this.locationService.getAllLocations();
  }

  public onRemoveLocation(loc: Place): void{
    this.locationService.removeLocation(loc);
  }


}

