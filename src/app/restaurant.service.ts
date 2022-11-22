import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient:HttpClient) { }
base_url:String="http://localhost:3210/restaurantApp/v1/"
 

addRestaurant(resobj:any){
return this.httpClient.post(resobj,this.base_url+"addRestaurant");
}
getRestaurant(){
  return this.httpClient.get(this.base_url+"getAllRes");
}

}
