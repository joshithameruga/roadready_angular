import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-delete-customer-identity',
  templateUrl: './delete-customer-identity.component.html',
  styleUrls: ['./delete-customer-identity.component.css']
})
export class DeleteCustomerIdentityComponent {

  customerId!:number;

  constructor(private service:Service , private router:Router){}

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
  
  deleteCustomerIdentity(){
    this.customerId=this.getCustomerIdFromLocalStorage();

    this.service.deleteCustomerIdentity(this.customerId).subscribe(
      () => {
        // Handle successful deletion
        console.log('Customer identity deleted successfully');
      },
      error => {
        // Handle error
        console.error('Failed to delete customer identity:', error);
      }
    );

    this.router.navigate(['/customerdashboard']);
  }

}
