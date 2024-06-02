import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../../service/jwt-client.service';
import { Service } from 'src/app/service/service';
import { Store, select } from '@ngrx/store';
import { NotificationState } from 'src/app/store/notification.reducer';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  
  customers!:number;
  cars!:number;
  revenue!:number;

  notification$!: Observable<NotificationState>;
   subscription!: Subscription;
  showDetails: boolean = false;
  notificationMessage: string = '';

  constructor(private router: Router,private jwtService:JwtClientService , private service:Service , private store: Store<{ notification: NotificationState }>) {

    this.notification$ = store.pipe(select('notification'));
    this.subscription = this.notification$.subscribe(notification => {
      if (notification) {
        this.notificationMessage = notification.message;
      } else {
        // Handle the case where notification is undefined or null
        // For example, you can set a default message or handle it in another way
        this.notificationMessage = 'No new notifications';
      }
    });

  }

  ngOnInit(){
    this.totalCustomers();
    this.totalCars();
    this.totalRevenue();

    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }


  
  toggleNotificationDetails() {
    this.showDetails = !this.showDetails;
  }

  totalCustomers(){
     this.service.totalCustomers().subscribe(
      (data: number) => {
        this.customers = data;
      },
      (error) => {
        console.error('Error fetching value from backend:', error);
      }
     )
    
  }

  totalCars(){
    this.service.totalCars().subscribe(
     (data: number) => {
       this.cars = data;
     },
     (error) => {
       console.error('Error fetching value from backend:', error);
     }
    )
   
 }

 totalRevenue(){
  this.service.totalRevenue().subscribe(
   (data: number) => {
     this.revenue = data;
     console.log(this.revenue);
   },
   (error) => {
     console.error('Error fetching value from backend:', error);
   }
  )
 
}

  logout(): void {

    this.jwtService.clearStoredToken();
    this.router.navigate(['/login']);
  }

  /*ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }*/

}


