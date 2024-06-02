import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/model/agent';

import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {

  constructor(private agentService: Service , private router:Router) { }

  ngOnInit(){
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
  }

  addAgent(data: Agent) {
    console.log(data);
    this.agentService.insertAgent(data);
    this.router.navigate(["/searchallagents"])

  }
}
