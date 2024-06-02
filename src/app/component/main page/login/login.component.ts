import { Component, OnInit } from '@angular/core';
import { AuthRequest } from '../../../model/AuthRequest';
import { JwtClientService } from '../../../service/jwt-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any;
  token:any;


  authRequest: AuthRequest = new AuthRequest();

  

constructor(private jwtService:JwtClientService , private router:Router){}

ngOnInit(){
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function() {
    window.history.pushState(null, '', window.location.href);
  };
}
 readFormData(formData:any){

    this.authRequest.username = formData.form.value.username;
    this.authRequest.password = formData.form.value.password;

    this.getAccessToken(this.authRequest);

 }

public getAccessToken(authRequest:any){
    console.log(authRequest);
 let response =  this.jwtService.getGeneratedToken(authRequest);

    response.subscribe( (genToken)=> {
      localStorage.setItem('jwtToken',genToken.toString());
         this.token = genToken ;console.log(genToken); 
        this.accessApi(this.token) });

}

public accessApi(token: any): void {
   const decodedToken = this.jwtService.authorizationTest(token);

   
 
   if (decodedToken) {
     console.log('Decoded Token Claims:', decodedToken);
 
     const role = decodedToken.role;
    // const customerId = decodedToken.customerId;
     console.log("role  " + role);
    // console.log(customerId);

     if (role === 'ROLE_CUSTOMER') {
       console.log('Navigating to customer-dashboard...');
       this.router.navigate(['/customerdashboard']);
     } 
     else if(role === 'ROLE_ADMIN'){
      console.log('Navigating to admin-dashboard...');
       this.router.navigate(['/admindashboard']);
     }
     else if(role === 'ROLE_AGENT'){
      console.log('Navigating to agent-dashboard...');
      this.router.navigate(['/agentdashboard']);
     }
     else {
       console.log('Permission denied. No navigation.');
     }
 
   } else {
     console.error('Error accessing API');
   }
 }

 backtoRegistration(){
  this.router.navigate(['/registration']);
 }

 passwordUpdation(){
  this.router.navigate(['/forgotpassword']);
 }


}

