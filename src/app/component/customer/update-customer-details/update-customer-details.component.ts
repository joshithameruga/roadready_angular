import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-update-customer-details',
  templateUrl: './update-customer-details.component.html',
  styleUrls: ['./update-customer-details.component.css']
})
export class UpdateCustomerDetailsComponent {
  customerId!:number;

  constructor(private service:Service , private route:ActivatedRoute , private router:Router){}

  ngOnInit(){

    this.route.queryParams.subscribe(params => {
      this.customerId = +params['customerId']; // Parse as number
      
    });

   
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    
  }
  
  updateCustomer(data:Customer){
        
    this.service.updateCustomerDetails(data)
    .subscribe((customer) => {console.log("updated customer is:"+customer);})
   this.router.navigate(['/searchallcustomers']);
 
  }

}
