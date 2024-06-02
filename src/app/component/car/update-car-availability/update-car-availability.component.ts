import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-update-car-availability',
  templateUrl: './update-car-availability.component.html',
  styleUrls: ['./update-car-availability.component.css']
})
export class UpdateCarAvailabilityComponent {

  carId!:number;
  carStatus!:string;

  constructor(private carService:Service , private router:Router){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }




updateCarAvailability(){
  console.log(this.carId , this.carStatus);
  this.carService.updateCarStatus(this.carStatus,this.carId).subscribe((car :Car)=>{console.log('update car' + car) });
  this.router.navigate(['/agentdashboard']);
}

}
