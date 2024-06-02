import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  reservationId!:number;
  carStatus!:string;

  constructor(private checkOutService:Service , private router:Router){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  checkOut() {
    
        this.checkOutService.checkingOut(this.reservationId,this.carStatus)
            .subscribe((car) => { console.log("updated car status is:" + car); });
   
            this.router.navigate(['/agentdashboard']);
 
}
}
