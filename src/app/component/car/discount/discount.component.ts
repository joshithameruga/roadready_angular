import { Component } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent {

  constructor(private service:Service){}
  
  discountOnCarMake(make:string , discountPercentage:number){

        this.service.discountOnCarMake(make,discountPercentage);
  }

}
