import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Feedback } from '../../../model/feedback';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent {

  customerId!:number;
  constructor(private feedbackService:Service , private router:Router){}

  ngOnInit(){
    this.customerId=this.getCustomerIdFromLocalStorage();
   
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
  

  insertCustomerFeedback(data:Feedback){
        
    this.feedbackService.insertCustomerFeedback(data)
    .subscribe((customerfb) => {console.log("added customer's feedback is:"+customerfb);})

    this.router.navigate(['/customerdashboard']);
  }
}
