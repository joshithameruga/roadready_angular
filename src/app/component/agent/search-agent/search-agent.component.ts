import { Component } from '@angular/core';
import { Agent } from '../../../model/agent';
import { Router } from '@angular/router';
import { Service } from '../../../service/service';
@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.css']
})
export class SearchAgentComponent {

  agentSearchList:Agent[] =[];

  constructor(private agentService:Service,private router:Router){}
  data:string = '';

  
  ngOnInit(){
    this.getAllAgents();
    
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    
  }
 
    find(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }

  getAgentById(agentId:number){
    
    console.log(agentId)

      this.agentService.getAgentById(agentId).subscribe((a) => {console.log("agent obtained"+a)});
  }

  getAllAgents(){
    
    this.agentService.getAllAgents().subscribe( (agents)=> {this.agentSearchList = agents;console.log("list" + agents);
    
  });
  }

  deleteAgentById(id:number){
        
    this.agentService.deleteAgentById(id).subscribe(() => { console.log('Agent deleted successfully')});
   
 }

}
