import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './component/customer/addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './component/customer/searchcustomer/searchcustomer.component';
import { UpdatecustomerComponent } from './component/customer/updatecustomer/updatecustomer.component';
import { ContactUsComponent } from './component/main page/contact-us/contact-us.component';
import { HomeComponent } from './component/main page/home/home.component';
import { AboutUsComponent } from './component/main page/about-us/about-us.component';
import { RegistrationComponent } from './component/main page/registration/registration.component';
import { LoginComponent } from './component/main page/login/login.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { AdminFeedbackComponent } from './component/feedback/admin-feedback/admin-feedback.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AgentDashboardComponent } from './component/agent-dashboard/agent-dashboard.component';
import { SearchCarComponent } from './component/car/search-car/search-car.component';
import { CustomerFeedbackComponent } from './component/feedback/customer-feedback/customer-feedback.component';
import { UploadCustomerIdentityComponent } from './component/customerIdentity/upload-customer-identity/upload-customer-identity.component';
import { DeleteCustomerIdentityComponent } from './component/customerIdentity/delete-customer-identity/delete-customer-identity.component';
import { MakePaymentandReservationComponent } from './component/payment/make-paymentand-reservation/make-paymentand-reservation.component';
import { SearchPaymentsComponent } from './component/payment/search-payments/search-payments.component';
import { ModifyReservationComponent } from './component/reservation/modify-reservation/modify-reservation.component';
import { CancelReservationComponent } from './component/reservation/cancel-reservation/cancel-reservation.component';
import { SearchReservationsComponent } from './component/reservation/search-reservations/search-reservations.component';
import { AddCarComponent } from './component/car/add-car/add-car.component';
import { UpdateCarComponent } from './component/car/update-car/update-car.component';
import { AddAgentComponent } from './component/agent/add-agent/add-agent.component';

import { UpdateAgentComponent } from './component/agent/update-agent/update-agent.component';
import { SearchAgentComponent } from './component/agent/search-agent/search-agent.component';
import { SearchfeedbackComponent } from './component/feedback/searchfeedback/searchfeedback.component';
import { RevenuereportComponent } from './component/admin/revenuereport/revenuereport.component';

import { CarMaintenanceReportComponent } from './component/car/car-maintenance-report/car-maintenance-report.component';
import { CheckInComponent } from './component/car/check-in/check-in.component';
import { CheckOutComponent } from './component/car/check-out/check-out.component';
import { UpdateCarAvailabilityComponent } from './component/car/update-car-availability/update-car-availability.component';
import { GetCustomerIdentityComponent } from './component/customerIdentity/get-customer-identity/get-customer-identity.component';

import { NavBarComponent } from './component/main page/nav-bar/nav-bar.component';
import { ReportComponent } from './component/admin/report/report.component';
import { ViewCustomerReservatioonComponent } from './component/reservation/view-customer-reservatioon/view-customer-reservatioon.component';
import { ViewCustomerPaymentsComponent } from './component/payment/view-customer-payments/view-customer-payments.component';
import { AuthGuardService } from './service/auth-guard.service';
import { ForgotPasswordComponent } from './component/main page/forgot-password/forgot-password.component';
import { UpdateCustomerDetailsComponent } from './component/customer/update-customer-details/update-customer-details.component';




const routes: Routes = [

  
  // Customer Dashboard with children
  { 
    path: 'customerdashboard',
    component: CustomerDashboardComponent,
    canActivate: [AuthGuardService], // Protects the entire dashboard
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for the entire dashboard
  },
  { 
    path: 'updatecustomerdetails', 
    component: UpdatecustomerComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'customerfeedback', 
    component: CustomerFeedbackComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'uploadcustomeridentity', 
    component: UploadCustomerIdentityComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'deletecustomeridentity', 
    component: DeleteCustomerIdentityComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'makepayment', 
    component: MakePaymentandReservationComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'viewpaymenthistory', 
    component: ViewCustomerPaymentsComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'modifyreservation', 
    component: ModifyReservationComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'cancelreservation', 
    component: CancelReservationComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'viewreservationhistory', 
    component: ViewCustomerReservatioonComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'getavailablecars', 
    component: SearchCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },
  { 
    path: 'searchcarsbylocationmakemodel', 
    component: SearchCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_CUSTOMER' }, // Role authorization for this route
  },

  //admin

  { 
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService], // Protects the entire admin dashboard
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for the entire admin dashboard
  },
  { 
    path: 'addcustomer', 
    component: AddcustomerComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'searchallcustomers', 
    component: SearchcustomerComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'updatecustomer', 
    component: UpdatecustomerComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'addcar', 
    component: AddCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'admindashboard/searchcar/:carId', 
    component: SearchCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'searchallcars', 
    component: SearchCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'updatecar', 
    component: UpdateCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'discountoncarbymake', 
    component: UpdateCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'updatecarprice', 
    component: UpdateCarComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'addagent', 
    component: AddAgentComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
 
  { 
    path: 'updateagent', 
    component: UpdateAgentComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'searchagent', 
    component: SearchAgentComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'searchallagents', 
    component: SearchAgentComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'viewallreservations', 
    component: SearchReservationsComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'reservationsofcustomer', 
    component: SearchReservationsComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'viewallpayments', 
    component: SearchPaymentsComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'payemntsofcustomer', 
    component: SearchPaymentsComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'adminfeedback/:feedbackId', 
    component: AdminFeedbackComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'viewallfeedbacks', 
    component: SearchfeedbackComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
  { 
    path: 'revenuereport', 
    component: RevenuereportComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
 
  { 
    path: 'revenuereportByCustomer', 
    component: ReportComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },
 

  // Agent Dashboard 
  { 
    path: 'agentdashboard',
    component: AgentDashboardComponent,
    canActivate: [AuthGuardService], // Protects the entire agent dashboard
    data: { expectedRole: 'ROLE_AGENT' }, // Role authorization for the entire agent dashboard
  },
  { 
    path: 'checkin', 
    component: CheckInComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_AGENT' }, // Role authorization for this route
  },
  { 
    path: 'checkout', 
    component: CheckOutComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_AGENT' }, // Role authorization for this route
  },
  { 
    path: 'updatecaravailability', 
    component: UpdateCarAvailabilityComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_AGENT' }, // Role authorization for this route
  },
  { 
    path: 'verifyidentity', 
    component: GetCustomerIdentityComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_AGENT' }, // Role authorization for this route
  },
  { 
    path: 'carmaintenancereport', 
    component: CarMaintenanceReportComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_AGENT' }, // Role authorization for this route
  },

  { 
    path: 'updatecustomerbyadmin', 
    component: UpdateCustomerDetailsComponent,
    canActivate: [AuthGuardService], // Protects this route
    data: { expectedRole: 'ROLE_ADMIN' }, // Role authorization for this route
  },


  // Main page
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavBarComponent },
  {path:'forgotpassword' , component:ForgotPasswordComponent}

];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*const routes: Routes = [
  

  //mainpage 

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'customerdashboard' , component:CustomerDashboardComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'agentdashboard',component:AgentDashboardComponent},
  {path:'navbar',component:NavBarComponent},


  //customer dashboard
  
  {path:'updatecustomerdetails',component:UpdatecustomerComponent},
  {path:'customerfeedback',component:CustomerFeedbackComponent},
  {path:'uploadcustomeridentity',component:UploadCustomerIdentityComponent},
  {path:'deletecustomeridentity',component:DeleteCustomerIdentityComponent},
  {path:'makepayment',component:MakePaymentandReservationComponent},
  {path:'viewpaymenthistory',component:ViewCustomerPaymentsComponent},
  {path:'modifyreservation',component:ModifyReservationComponent},
  {path:'cancelreservation',component:CancelReservationComponent},
  {path:'viewreservationhistory',component:ViewCustomerReservatioonComponent},

  
  
  //admin dashboard 

  {path:'addcustomer',component:AddcustomerComponent},
  {path:'searchallcustomers',component:SearchcustomerComponent},
  {path:'updatecustomer',component:UpdatecustomerComponent},

  {path:'addcar',component:AddCarComponent},
  {path:'searchcar/:carId',component:SearchCarComponent},
  {path:'searchallcars',component:SearchCarComponent},
  {path:'updatecar',component:UpdateCarComponent},
  {path:'discountoncarbymake',component:UpdateCarComponent},
  {path:'updatecarprice',component:UpdateCarComponent},
  

  {path:'addagent',component:AddAgentComponent},
  {path:'deleteagent',component:DeleteAgentComponent},
  {path:'updateagent',component:UpdateAgentComponent},
  {path:'searchagent',component:SearchAgentComponent},
  {path:'searchallagents',component:SearchAgentComponent},

  {path:'viewallreservations',component:SearchReservationsComponent},
  {path:'reservationsofcustomer',component:SearchReservationsComponent},
  {path:'viewallpayments',component:SearchPaymentsComponent},
  {path:'payemntsofcustomer',component:SearchPaymentsComponent},
  {path:'adminfeedback/:feedbackId',component:AdminFeedbackComponent},
  {path:'viewallfeedbacks',component:SearchfeedbackComponent},
  {path:'revenuereport',component:RevenuereportComponent},
  {path:'revenuereport/:startDate/:endDate' , component:ReportComponent},
  {path:'revenuereport/:customerId' , component:ReportComponent},
  {path:'registersubadmin',component:AddadminComponent},

  //common for both customer and admin
  {path:'getavailablecars',component:SearchCarComponent},
  {path:'searchcarsbylocationmakemodel',component:SearchCarComponent},
  

// agent dashboard
 {path:'checkin',component:CheckInComponent},
 {path:'checkout',component:CheckOutComponent},
 {path:'updatecaravailability',component:UpdateCarAvailabilityComponent},
 {path:'verifyidentity',component:GetCustomerIdentityComponent},
 {path:'carmaintenancereport',component:CarMaintenanceReportComponent}
  
  

];*/