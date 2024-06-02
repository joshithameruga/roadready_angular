import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-car-maintenance-report',
  templateUrl: './car-maintenance-report.component.html',
  styleUrls: ['./car-maintenance-report.component.css']
})
export class CarMaintenanceReportComponent {

  maintenanceReport:string='';

  constructor(private agentService: Service) {}

  ngOnInit(): void {
    //this.agentService.carMaintenanceReport().subscribe((report) => {
     // this.maintenanceReport = report;

     this.getMaintenanceReport();

  
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    

    }

   
  getMaintenanceReport(){
    this.agentService.carMaintenanceReport().subscribe(
      (response: string) => {
        this.maintenanceReport = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
