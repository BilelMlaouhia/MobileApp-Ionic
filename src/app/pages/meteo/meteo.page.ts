import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoPage implements OnInit {

cityWeather={
  name:'',
  longtitude:0,
  latitude:0,
  humidity:0,
  temperature:0,
  description:'',
  weather:'',
  dt: 0
};
weatherIcon=[
        {description:'broken clouds',url:'icons8-partly-cloudy-day-48.png'},
        {description:'overcast clouds',url:'icons8-partly-cloudy-day-48.png'},
        {description:'scattered clouds',url:'icons8-partly-cloudy-day-48.png'},
        {description:'few clouds',url:'icons8-partly-cloudy-day-48.png'},
        {description:'shower rain',url:'icons8-rainwater-catchment-48.png'},
        {description:'rain',url:'icons8-rain-48.png'},
        {description:'thunderstorm',url:'icons8-cloud-lightning-48.png'},
        {description:'snow',url:'icons8-snow-48.png'},
        {description:'mist',url:'icons8-wind-48.png'},
        {description:'clear sky',url:'icons8-summer-48.png'}
];
weatherIconURL='';
constructor(private http: HttpClient, private alertCtrl: AlertController) { }

ngOnInit() {
 this.onGetWeather('Zaghouan');
}

onGetWeather(city: string){
this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8701097c942c97393fd92e538a108993`)
.subscribe(res=>{
   this.cityWeather={
    name:res.name,
    description:res.weather[0].description,
    humidity:res.main.humidity,
    latitude:res.coord.lat,
    longtitude:res.coord.lon,
    temperature:Number((res.main.temp-273.15).toFixed(2)),
    weather:res.weather[0].main,
    dt:res.dt * 1000
   };
   this.weatherIcon.forEach(w=>{
    if(res.weather[0].description.toLowerCase()===w.description){
      this.weatherIconURL=w.url;
      return ;
    }
   });
   console.log(JSON.stringify(this.cityWeather));
},err=>{
  console.log('error from weather API '+JSON.stringify(err));
  this.citNotFound(city);
});
}

public async citNotFound(city: string) {
const alert= await this.alertCtrl.create({
  header:'City not Found',
  message:`wrong city name, ${city} not found`,
  buttons:['OK']
});
await alert.present();
}


}
