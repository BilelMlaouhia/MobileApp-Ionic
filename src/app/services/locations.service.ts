import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng, Marker, MarkerOptions, Environment } from '@ionic-native/google-maps';




@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private geoloction: Geolocation) { }

  getCurrentLocation(){
   return this.geoloction.getCurrentPosition();
  }

  getGeoLocation(){
 return this.geoloction.watchPosition()
     .subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  initMap(child: any, lat: number, lng: number) {
    Environment.setEnv({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDhzzVSGA8Sr1K2mC7szc-qU58nWKgtYkg',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDhzzVSGA8Sr1K2mC7szc-qU58nWKgtYkg'
    });

    const map: GoogleMap = GoogleMaps.create(child.nativeElement);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      const coordinates: LatLng = new LatLng(lat, lng);

      const position = {
        target: coordinates,
        zoom: 12
      };

      map.animateCamera(position);

      const markerOptions: MarkerOptions = {
        position: coordinates,
       // icon: "assets/images/icons8-Marker-64.png",
        title: 'Bilel is map'
      };

      const marker = map.addMarker(markerOptions)
        .then((mark: Marker) => {
          mark.showInfoWindow();
      });
    });
  }

}

// Operation "operations/acat.p2-799871474628-b3cb6df1-ecc6-4969-badf-7fee057297f7" finished successfully.
// bilelmlawhia@cloudshell:~$ gcloud alpha services api-keys create \
//     --project "bilelfirstmobileapp" \
//     --display-name "myfirstmobileapp"
// Operation [operations/akmf.p7-799871474628-0822f6ee-528a-4751-909d-a9d1ed6d93e2] complete. Result: {
//     "@type":"type.googleapis.com/google.api.apikeys.v2.Key",
//     "createTime":"2022-09-13T03:21:04.487886Z",
//     "displayName":"myfirstmobileapp",
//     "etag":"W/\"eY4qnt3FB4pfDrqHufw7rg==\"",
//     "keyString":"AIzaSyDhzzVSGA8Sr1K2mC7szc-qU58nWKgtYkg",
//     "name":"projects/799871474628/locations/global/keys/4f518be3-2ea2-48ce-940f-7d29e577e7ee",
//     "uid":"4f518be3-2ea2-48ce-940f-7d29e577e7ee",
//     "updateTime":"2022-09-13T03:21:04.515442Z"
