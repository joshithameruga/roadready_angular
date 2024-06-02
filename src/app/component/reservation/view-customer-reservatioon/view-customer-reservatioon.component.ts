import { Component } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationListDTO } from 'src/app/model/reservationListDTO';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-view-customer-reservatioon',
  templateUrl: './view-customer-reservatioon.component.html',
  styleUrls: ['./view-customer-reservatioon.component.css']
})
export class ViewCustomerReservatioonComponent {

  reservationSearchList:ReservationListDTO[] =[];
  
  constructor(private service:Service , private jwtService:JwtClientService){}
  
  ngOnInit(){

    this.viewCustomerReservations();
   
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    
  }

  getCustomerIdFromLocalStorage(): number {
    // Retrieve customer ID from localStorage
    const customerId = localStorage.getItem('Id');
    
    return customerId ? parseInt(customerId, 10) : 0;
  }
  
  viewCustomerReservations(){
    
   const customerId = this.getCustomerIdFromLocalStorage();
   console.log(customerId);
    this.service.viewReservationHistory(customerId).subscribe( (reservations)=> {this.reservationSearchList = reservations; console.log("list" + reservations);
  
  })


}


cancelReservation(reservationId:number){

  
  this.service.cancelReservation(reservationId).subscribe(() => { console.log('reservation deleted successfully')});
  }
  
}
