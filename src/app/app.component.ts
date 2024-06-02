import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadready';

  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !this.isDashboardRoute(event.url);
      }
    });
  }

  isDashboardRoute(url: string): boolean {
    // Define your dashboard routes here
    const dashboardRoutes = [
      '/customerdashboard',
      '/updatecustomerdetails',
      '/customerfeedback',
      '/uploadcustomeridentity',
      '/deletecustomeridentity',
      '/makepayment',
      '/viewpaymenthistory',
      '/modifyreservation',
      '/cancelreservation',
      '/viewreservationhistory',
      '/getavailablecars',
      '/searchcarsbylocationmakemodel',
      '/admindashboard',
      '/addcustomer',
      '/searchallcustomers',
      '/updatecustomer',
      '/addcar',
      '/admindashboard/searchcar/:carId',
      '/searchallcars',
      '/updatecar',
      '/discountoncarbymake',
      '/updatecarprice',
      '/addagent',
      '/deleteagent',
      '/updateagent',
      '/searchagent',
      '/searchallagents',
      '/viewallreservations',
      '/reservationsofcustomer',
      '/viewallpayments',
      '/payemntsofcustomer',
      '/adminfeedback/:feedbackId',
      '/viewallfeedbacks',
      '/revenuereport',
      '/revenuereportByCustomer',
      '/registersubadmin',
      '/agentdashboard',
      '/checkin',
      '/checkout',
      '/updatecaravailability',
      '/verifyidentity',
      '/carmaintenancereport',
      '/updatecustomerbyadmin'
    ];
    return dashboardRoutes.some(route => url.includes(route));
  }

}