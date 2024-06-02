import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Password } from 'src/app/model/password';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private passwordService:Service, private router:Router){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  resetpassword(data:Password){
        
    this.passwordService.newPasswordGeneration(data)
    .subscribe(() => {console.log(" password  updated");})

    this.router.navigate(['/login']);

   
  }

}
