import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../../service/service';
import { PaymentAndReservation } from '../../../model/paymentAndReservation';

@Component({
  selector: 'app-make-paymentand-reservation',
  templateUrl: './make-paymentand-reservation.component.html',
  styleUrls: ['./make-paymentand-reservation.component.css']
})
export class MakePaymentandReservationComponent {


   minDate!: string;

  customerId!:number;
  
  dailyRate!: number;
  carId!: number;


  dateOfPickup!: string;
  dateOfDropOff!:string;
  amount!:number;

  constructor(private paymentAndReservationService:Service , private route:ActivatedRoute , private carService:Service , private router:Router) {

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    
  }

 ngOnInit(){

    this.customerId= this.getCustomerIdFromLocalStorage();

  // Subscribe to the queryParams observable to get the values of dailyRate and carId
  this.route.queryParams.subscribe(params => {
    this.dailyRate = +params['dailyRate']; // Parse as number
    this.carId = +params['carId']; // Parse as number
  });


  
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  
   

}  


   
getCustomerIdFromLocalStorage(): number {
  // Retrieve customer ID from localStorage
  const customerId = localStorage.getItem('Id');
  
  return customerId ? parseInt(customerId) : 0;
}

  makePaymentAndReservation(data:PaymentAndReservation){
        
    
    this.paymentAndReservationService.makePaymentAndReservation(data)
    .subscribe((PaymentAndReservation) => {console.log("payment made : "+PaymentAndReservation);})
    this.router.navigate(['/viewreservationhistory']);
  }

  calculateAmount(): void {
    // Convert date strings to Date objects
    const startDate = new Date(this.dateOfPickup);
    const endDate = new Date(this.dateOfDropOff);

    // Calculate the difference in milliseconds
    const differenceMs = endDate.getTime() - startDate.getTime();

    // Convert the difference to days
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    // Calculate the total amount
    this.amount = differenceDays * this.dailyRate;

    // Use the totalAmount as needed
    console.log('Total amount:', this.amount);
    
  }

  onDateChange(): void {
    this.calculateAmount();
  }


}
