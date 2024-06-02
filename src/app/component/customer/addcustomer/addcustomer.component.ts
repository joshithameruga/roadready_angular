import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {

  constructor(private customerService:Service , private router:Router){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  insertCustomer(data:Customer){
        
    this.customerService.insertCustomer(data)
    .subscribe((customer) => {console.log("added customer is:"+customer);})
    this.router.navigate(["/searchallcustomers"])
  }
  }

