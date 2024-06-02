import { Component } from '@angular/core';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent {

    constructor(private reservationService:Service){}

    
    cancelReservation(reservationId:number){

  
      this.reservationService.deleteCustomer(reservationId).subscribe(() => { console.log('reservation deleted successfully')});
      }

}
