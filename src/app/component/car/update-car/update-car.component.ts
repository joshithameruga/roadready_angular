import { Component } from '@angular/core';
import { Car } from '../../../model/car';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent {
  constructor(private carService:Service){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  updateCar(data:Car){
        
    this.carService.updateCarDetails(data)
    .subscribe((car) => {console.log("updated customer is:"+car);})
  }
}
