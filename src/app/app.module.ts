import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule}  from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './component/customer/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './component/customer/updatecustomer/updatecustomer.component';
import { SearchcustomerComponent } from './component/customer/searchcustomer/searchcustomer.component';


import { UpdateCarComponent } from './component/car/update-car/update-car.component';
import { SearchCarComponent } from './component/car/search-car/search-car.component';
import { MakePaymentandReservationComponent } from './component/payment/make-paymentand-reservation/make-paymentand-reservation.component';
import { ModifyReservationComponent } from './component/reservation/modify-reservation/modify-reservation.component';
import { CancelReservationComponent } from './component/reservation/cancel-reservation/cancel-reservation.component';
import { SearchPaymentsComponent } from './component/payment/search-payments/search-payments.component';
import { SearchReservationsComponent } from './component/reservation/search-reservations/search-reservations.component';
import { CustomerFeedbackComponent } from './component/feedback/customer-feedback/customer-feedback.component';
import { AdminFeedbackComponent } from './component/feedback/admin-feedback/admin-feedback.component';
import { UploadCustomerIdentityComponent } from './component/customerIdentity/upload-customer-identity/upload-customer-identity.component';
import { DeleteCustomerIdentityComponent } from './component/customerIdentity/delete-customer-identity/delete-customer-identity.component';
import { GetCustomerIdentityComponent } from './component/customerIdentity/get-customer-identity/get-customer-identity.component';
import { AddAgentComponent } from './component/agent/add-agent/add-agent.component';

import { SearchAgentComponent } from './component/agent/search-agent/search-agent.component';
import { UpdateAgentComponent } from './component/agent/update-agent/update-agent.component';
import { HomeComponent } from './component/main page/home/home.component';



import { AboutUsComponent } from './component/main page/about-us/about-us.component';
import { ContactUsComponent } from './component/main page/contact-us/contact-us.component';

import { RegistrationComponent } from './component/main page/registration/registration.component';
import { LoginComponent } from './component/main page/login/login.component';

import { AddCarComponent } from './component/car/add-car/add-car.component';
import { SearchfeedbackComponent } from './component/feedback/searchfeedback/searchfeedback.component';
import { RevenuereportComponent } from './component/admin/revenuereport/revenuereport.component';

import { CarMaintenanceReportComponent } from './component/car/car-maintenance-report/car-maintenance-report.component';
import { CheckInComponent } from './component/car/check-in/check-in.component';
import { CheckOutComponent } from './component/car/check-out/check-out.component';
import { UpdateCarAvailabilityComponent } from './component/car/update-car-availability/update-car-availability.component';



import { NavBarComponent } from './component/main page/nav-bar/nav-bar.component';

import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AgentDashboardComponent } from './component/agent-dashboard/agent-dashboard.component';
import { SearchByIdPipe } from './pipes/search-by-id.pipe';
import { SearchCarByIdPipe } from './pipes/search-car-by-id.pipe';
import { SearchReservationByIdPipe } from './pipes/search-reservation-by-id.pipe';
import { SearchPaymentByIdPipe } from './pipes/search-payment-by-id.pipe';
import { SearchFeedbackPipe } from './pipes/search-feedback.pipe';
import { ReportComponent } from './component/admin/report/report.component';

import { ViewCustomerReservatioonComponent } from './component/reservation/view-customer-reservatioon/view-customer-reservatioon.component';
import { ViewCustomerPaymentsComponent } from './component/payment/view-customer-payments/view-customer-payments.component';
import { StoreModule } from '@ngrx/store';

import { notificationReducer } from './store/notification.reducer';
import { ForgotPasswordComponent } from './component/main page/forgot-password/forgot-password.component';
import { UpdateCustomerDetailsComponent } from './component/customer/update-customer-details/update-customer-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    SearchcustomerComponent,
    AddCarComponent,
 
    UpdateCarComponent,
    SearchCarComponent,
    MakePaymentandReservationComponent,
    ModifyReservationComponent,
    CancelReservationComponent,
    SearchPaymentsComponent,
    SearchReservationsComponent,
    CustomerFeedbackComponent,
    AdminFeedbackComponent,
    UploadCustomerIdentityComponent,
    DeleteCustomerIdentityComponent,
    GetCustomerIdentityComponent,
    AddAgentComponent,
   
    SearchAgentComponent,
    UpdateAgentComponent,
    HomeComponent,
    CustomerDashboardComponent,
    AdminDashboardComponent,
    AgentDashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegistrationComponent,
    LoginComponent,
    SearchfeedbackComponent,
    RevenuereportComponent,
   
    CarMaintenanceReportComponent,
    CheckInComponent,
    CheckOutComponent,
    UpdateCarAvailabilityComponent,
   
    NavBarComponent,
   
    SearchByIdPipe,
    SearchCarByIdPipe,
    SearchReservationByIdPipe,
    SearchPaymentByIdPipe,
    SearchFeedbackPipe,
    ReportComponent,
 
    ViewCustomerReservatioonComponent,
    ViewCustomerPaymentsComponent,
    ForgotPasswordComponent,
    UpdateCustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({ notification: notificationReducer }),
    NoopAnimationsModule,
    MatPaginatorModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
