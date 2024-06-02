import { Component, OnInit } from '@angular/core';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent{
 
  customerId!:number;

  constructor(private customerService:Service , private route:ActivatedRoute){}

  ngOnInit(){

    this.customerId= this.getCustomerIdFromLocalStorage();

    
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
  
  
  

  updateCustomer(data:Customer){
        
    this.customerService.updateCustomerDetails(data)
    .subscribe((customer) => {console.log("updated customer is:"+customer);})
  }
  
}
