import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent {

  customerSearchList:Customer[] =[];

  filteredCustomerList:Customer[]=[];

   // Define properties for pagination
   pageSize = 5;  //items per page
   pageSizeOptions: number[] = [5, 10, 25, 100];
   currentPage: number = 0; // Current page index

   customerPageList:Customer[]=[];

    // ViewChild to access the paginator in the template
    @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService:Service ,private router:Router){}

 
  
   
    
  isselected:boolean = false;

  searchId!: number;




  ngOnInit(){

    this.getAllCustomers();

  
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    
  }

  
 

    findCustomer(customerId : any){

    
      this.filteredCustomerList = this.customerSearchList.filter(customer => customer.customerId === customerId);
      this.isselected = true;

    }

   

    

  getCustomerById(customerId:number){
    
    console.log(customerId)

      this.customerService.getCustomerById(customerId).subscribe((cust) => {console.log("customer obtained"+cust)});
  }

  getAllCustomers(){
    
    this.customerService.getAllCustomers().subscribe( (customers)=> {this.customerSearchList = customers;console.log("list" + customers);});
    this.onPageChange({
      pageIndex: this.currentPage, pageSize: this.pageSize,
      length: 0
    }); // Trigger pagination
  
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.customerPageList = this.customerSearchList.slice(startIndex, endIndex);
    
  }

  updateCustomer(data:Customer){
        
    this.customerService.updateCustomerDetails(data)
    .subscribe((customer) => {console.log("updated customer is:"+customer);})
  }


  deleteCustomerById(id:number){
        
    this.customerService.deleteCustomer(id).subscribe(() => { console.log('Customer deleted successfully')});

    this.getAllCustomers();
   
   
 }

  
}