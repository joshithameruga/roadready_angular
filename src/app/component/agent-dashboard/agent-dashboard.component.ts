import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../../service/jwt-client.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent {

  constructor(private router: Router,private jwtService:JwtClientService , private notificationService: NotificationService){}

  ngOnInit(){

    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }


  sendNotification() {
    this.notificationService.sendNotification( 'Some cars under maintenance!');
  }


  logout(): void {

    this.jwtService.clearStoredToken();
    this.router.navigate(['/login']);
  }
  
}
