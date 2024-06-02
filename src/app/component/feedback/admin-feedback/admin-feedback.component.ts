import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent {

  Feedback:string='';
  constructor(private feedbackService:Service , private route:ActivatedRoute ,private router:Router){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

 
  onReplyChange() {

    const id = +this.route.snapshot.params['feedbackId']; // Extract ID from route parameter
    console.log(' feedback Id:', id);
    console.log(typeof id);
    console.log('Admin reply for feedback:', this.Feedback);
    this.feedbackService.insertAdminFeedback(id, this.Feedback).subscribe((result) => {console.log(result)});
    this.router.navigate(['/viewallfeedbacks']);
    
   
  }

}
