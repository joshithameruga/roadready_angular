import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private customerService:Service , private router:Router){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  registerCustomer(data:Customer){
        
    this.customerService.registerCustomer(data)
    .subscribe((customer) => {console.log("added customer is:"+customer);})

    this.router.navigate(["/login"])
  }
   

}
