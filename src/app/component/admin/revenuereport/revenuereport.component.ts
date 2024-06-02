import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-revenuereport',
  templateUrl: './revenuereport.component.html',
  styleUrls: ['./revenuereport.component.css']
})
export class RevenuereportComponent {
  
  Report!:string;
  startDate!:string;
  endDate!:string;
  showReport:boolean=false;
  constructor(private router: Router , private service:Service ) {}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }


  generateRevenueBetweenDates() {
 
  

    this.service.getReportByDates(this.startDate,this.endDate).subscribe(
      (response: string) => {
        this.Report = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
   
    this.showReport=true;
    
   
  }

  
}
