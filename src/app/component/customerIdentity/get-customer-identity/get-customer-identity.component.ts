import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-get-customer-identity',
  templateUrl: './get-customer-identity.component.html',
  styleUrls: ['./get-customer-identity.component.css']
})
export class GetCustomerIdentityComponent {

  pdfUrl: string | null = null;
 
  customerId!:number;

  safeUrl!: SafeResourceUrl;

  
  constructor(private service:Service , private router:Router , private sanitizer: DomSanitizer){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }
  
  
  getPdf() {
    
    this.service.getCustomerIdentity(this.customerId).subscribe(blob => {
      
      this.pdfUrl =  URL.createObjectURL(blob);
      this.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
    },
    
      error => {
        console.error('Failed to fetch PDF:', error);
      }
    );

   // this.router.navigate(['/agentdashboard']);
  }



}
