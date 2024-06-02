import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-upload-customer-identity',
  templateUrl: './upload-customer-identity.component.html',
  styleUrls: ['./upload-customer-identity.component.css']
})
export class UploadCustomerIdentityComponent {

  customerId: number = 0;
  selectedFile: File | null = null;



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
  
  upload(): void {
    if (!this.selectedFile) return;

    // Assume customerId is 123, replace it with your actual logic to obtain the customerId
    this.service.uploadCustomerIdentity(this.selectedFile , this.customerId)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('File upload completed')
      });

      this.router.navigate(['/customerdashboard']);
  }

 onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
}

}
