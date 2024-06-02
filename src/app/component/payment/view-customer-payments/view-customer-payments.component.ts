import { Component } from '@angular/core';
import { Payment } from 'src/app/model/payment';
import { PaymentListDTO } from 'src/app/model/paymentListDTO';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-view-customer-payments',
  templateUrl: './view-customer-payments.component.html',
  styleUrls: ['./view-customer-payments.component.css']
})
export class ViewCustomerPaymentsComponent {

  paymentSearchList:PaymentListDTO[] =[];
  
  constructor(private service:Service , private jwtService:JwtClientService){}
  
  ngOnInit(){

    this.viewCustomerPayments();

  
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
  
  viewCustomerPayments(){
    
   const customerId = this.getCustomerIdFromLocalStorage();
   console.log(customerId);
    this.service.viewpaymentHistory(customerId).subscribe( (payments)=> {this.paymentSearchList = payments; console.log("list" + payments);
  
  })
}
  

}
