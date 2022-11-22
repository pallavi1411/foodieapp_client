import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private resService:RestaurantService) {
    this.getAllRestaurant();
   }

  ngOnInit(): void {
  }

  restaurantForm=new FormGroup({
    "restaurnatName": new FormControl(''),
    "items": new FormControl(''),
    "image": new FormControl(''),
    "city": new FormControl(''),
    "state": new FormControl(''),
    "area": new FormControl(''),
    "pincode": new FormControl(''),
  
  
  });
  save(){
this.resService.addRestaurant(this.restaurantForm).subscribe(
  response=>{
    alert('data added successfully');
    console.log(response);
  }
)    

  }
  restaurants:any;
  getAllRestaurant(){
    this.resService.getRestaurant().subscribe(
      response=>{
        this.restaurants=response;
        console.log(this.restaurants);
      }
    )
  }
  

}
