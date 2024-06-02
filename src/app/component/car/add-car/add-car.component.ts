import { Component } from '@angular/core';
import { Car } from '../../../model/car';
import { Service } from '../../../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {


  constructor(private carService: Service ,private router:Router) { }

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  addCar(data: Car) {
    console.log(data);
    this.carService.insertCar(data).subscribe((car) => {console.log("added car is:"+car);});
    this.router.navigate(["/searchallcars"]);

  }
}
