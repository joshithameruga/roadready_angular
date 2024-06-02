import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(private service:Service , private route:ActivatedRoute){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }


  customerId!:number;
  Report!:string;
 
  showReport:boolean=false;
 

  revenueByCustomerId(){
     this.service.getReportByCustomerId(this.customerId).subscribe(
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
