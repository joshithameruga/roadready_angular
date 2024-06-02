import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Reservation } from '../../../model/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent {
  reservationSearchList: Reservation[] = [];

  reservationId!:number;

  constructor(private reservationService: Service ,private router: Router) { }

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  checkIn() {

    console.log(this.reservationId);

    this.reservationService.CheckIn(this.reservationId).subscribe((r) => { console.log("reservation details obtained" + r) });
    this.router.navigate(['/agentdashboard']);
  }


}
