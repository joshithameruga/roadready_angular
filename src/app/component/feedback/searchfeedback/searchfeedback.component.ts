import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../../../model/feedback';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-searchfeedback',
  templateUrl: './searchfeedback.component.html',
  styleUrls: ['./searchfeedback.component.css']
})
export class SearchfeedbackComponent {
  feedbackSearchList:Feedback[] =[];

  constructor(private feedbackService:Service,private router:Router){}
  data:string = '';
  searchId!:number;

  ngOnInit(){

    this. getAllFeedbacks();

    
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      
    }
  }

  
 
    find(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }
  getAllFeedbacks(){
    
    this.feedbackService.viewAllFeedbacks().subscribe( (fb)=> {this.feedbackSearchList = fb;console.log("list" + fb);
    
  });
  }

  

}
