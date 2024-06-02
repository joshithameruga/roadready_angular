import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../../service/service';
import { Payment } from '../../../model/payment';
import { PaymentListDTO } from 'src/app/model/paymentListDTO';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-payments',
  templateUrl: './search-payments.component.html',
  styleUrls: ['./search-payments.component.css']
})
export class SearchPaymentsComponent {

  
 paymentsOfCustomerList:Payment[] =[];

 allPayments:PaymentListDTO[]=[]
 
  constructor(private paymentAndReservationService:Service,private router:Router){}

    // ViewChild to access the paginator in the template
    @ViewChild(MatPaginator) paginator!: MatPaginator;

  data:string = '';
  searchId!:number;
  // Define properties for pagination
  pageSize = 5;  //items per page
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 0; // Current page index


  paymentPageList:PaymentListDTO[]=[];
 
  ngOnInit(){

    this.getAllPayments();

    
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    
  }

  findPayments(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }

  
  getAllPayments(){

    this.paymentAndReservationService.getAllPayments().subscribe( (payments)=> {this.allPayments = payments; this.allPayments.forEach(payment => {
     
      console.log("Customer:", payment.customerId);
      // Add more properties as needed
    });});
    console.log("List of payments:");
    this.onPageChange({
      pageIndex: this.currentPage, pageSize: this.pageSize,
      length: 0
    }); // Trigger pagination
    
  }


  

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paymentPageList = this.allPayments.slice(startIndex, endIndex);
  }

}