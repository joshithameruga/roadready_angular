import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Agent } from '../../../model/agent';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent {
  constructor(private agentService:Service){}

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  updateAgent(data:Agent){
        
    this.agentService.updateAgentDetails(data)
    .subscribe((agent) => {console.log("updated customer is:"+agent);})
  }
}
