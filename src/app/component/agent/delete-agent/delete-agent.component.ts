import { Component } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent {

  constructor(private agentService:Service){}

  deleteAgentById(id:number){
        
     this.agentService.deleteAgentById(id).subscribe(() => { console.log('Agent deleted successfully')});
    
  }
}
