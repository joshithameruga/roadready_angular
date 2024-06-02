import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/model/reservation';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-modify-reservation',
  templateUrl: './modify-reservation.component.html',
  styleUrls: ['./modify-reservation.component.css']
})
export class ModifyReservationComponent {

  constructor(private resevationService:Service , private router:Router , private route:ActivatedRoute){}

  reservationId!:number;
  dateOfPickup!:string;
  dateOfDropoff!:string;

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };

    // Subscribe to the queryParams observable to get the values of dailyRate and carId
  this.route.queryParams.subscribe(params => {
    this.reservationId = +params['reservationId']; // Parse as number
    
  });
}

  modifyReservation(){
   
    
    this.resevationService.modifyReservation(this.reservationId,this.dateOfPickup,this.dateOfDropoff).subscribe((reservation) => {console.log("modified reservation "+ reservation)});
    this.router.navigate(['/viewreservationhistory'])
  }
}
