import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable, map } from 'rxjs';
import { Car } from '../model/car';
import { PaymentAndReservation } from '../model/paymentAndReservation';
import { Payment } from '../model/payment';
import { Reservation } from '../model/reservation';
import { Admin } from '../model/admin';
import { Agent } from '../model/agent';
import { Feedback } from '../model/feedback';
import { JwtClientService } from './jwt-client.service';
import { PaymentListDTO } from '../model/paymentListDTO';
import { ReservationListDTO } from '../model/reservationListDTO';
import { Password } from '../model/password';

@Injectable({
  providedIn: 'root'
})
export class Service {

  
  
  constructor(private http:HttpClient , private jwtService:JwtClientService ) { 

  }


   private getHeaders(): HttpHeaders {
   const token = localStorage.getItem('jwtToken');
   //const token = this.jwtService.getStoredToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',

      'Authorization': "Bearer "+`${token}`
       
       
    }); 

    
  } 

  private getHeadersForDisplayingFile(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
      
      // 'Content-Type':'application/pdf',

      'Accept':'application/pdf',

       'Authorization': "Bearer "+`${token}`

       
        
        
     }); 
 
     
   } 
 

  


  private getHeadersForFile(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
   
     return new HttpHeaders({
       'Authorization': "Bearer "+`${token}`
        
     }); 
 
     
   } 
   
  

 
 
     
  /*private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200',
       'Authorization': `Bearer ${token}`
        
        
     }); 
 
     
   }*/


  baseURL:string='http://localhost:8080/roadready/'

  //customer

  getAllCustomers():Observable<Customer[]>{
    console.log(this.getHeaders());
    
    return this.http.get<Customer[]>("http://localhost:8080/roadready/customers/getAllCustomers",{headers:this.getHeaders()});

}

insertCustomer(body:Customer):Observable<Customer>{

  console.log(body);

    return this.http.post<Customer>(this.baseURL+"customers/addCustomer",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' } );

}

deleteCustomer(customerId:number):Observable<string>{

  return  this.http.delete<string>(this.baseURL+`customers/deleteCustomerById/${customerId}`,{ headers: this.getHeaders()});

}


getCustomerById(customerId:number):Observable<Customer[]>{

  console.log(customerId)
 return this.http.get<Customer[]>(this.baseURL+`customers/getCustomerById/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

updateCustomerDetails(body:Customer):Observable<Customer[]>{

  console.log(body);
  return this.http.put<Customer[]>(this.baseURL+"customers/updateCustomerDetails",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

findCustomer(data:string):Observable<Customer[]>{

  console.log(data)
  return this.http.get<Customer[]>(this.baseURL+`customers/getCustomerById/${data}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

 }

totalCustomers():Observable<number>{

  return this.http.get<number>(this.baseURL+"customers/countCustomers" ,{ headers: this.getHeaders()})
}


//car

  getAllCars(): Observable<Car[]> {

    return this.http.get<Car[]>(this.baseURL+"cars/getAllCars",{ headers: this.getHeaders()});

  }

  insertCar(body: Car):Observable<Car>{

    console.log(body);

    return this.http.post<Car>(this.baseURL+"cars/addCar",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

  }
  updateCarDetails(body:Car):Observable<Car[]>{

    console.log(body);
    return this.http.put<Car[]>(this.baseURL+"cars/updateCarDetails",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  }

  deleteCarById(id:number):Observable<string>{

    return  this.http.delete<string>(this.baseURL+`cars/deleteCarById/${id}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

  }
      //this._http.delete<Car>(this.baseUrl + id)
       // .subscribe((data) => { console.log(id + "record deleted"); }, err => { console.log(err) });

       findCar(data:string):Observable<Car[]>{


        console.log(data)
       return this.http.get<Car[]>(this.baseURL+`cars/getCarById/${data}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  
      }
      getCarById(carId:number):Observable<Car[]>{
        console.log(carId);
return this.http.get<Car[]>(this.baseURL+`getCarById/${carId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });


      }

    getAvailableCars():Observable<Car[]>{
      console.log('Fetching available cars...');
      return this.http.get<Car[]>(this.baseURL+"cars/getAvailableCars",{headers:this.getHeaders()});
      
    }

    carMaintenanceReport(): Observable<string> {
      return this.http.get<string>("http://localhost:8080/roadready/agents/carMaintenanceReport",{headers:this.getHeaders() , responseType:  'text' as 'json'  });
    }

  

 
  
  totalCars():Observable<number>{

    return this.http.get<number>(this.baseURL+"cars/countCars" ,{ headers: this.getHeaders()})
  }

  discountOnCarMake(make:string,discountPercentage:number):Observable<Car[]>{
   
    console.log("http://localhost:8080/roadready/cars/discountOnCarByMake" + `/${make}`+`/${discountPercentage}`,{ headers: this.getHeaders()});
    
    return this.http.put<Car[]>("http://localhost:8080/roadready/cars/discountOnCarByMake" + `/${make}`+`/${discountPercentage}`,null,{ headers: this.getHeaders() })
  
  }

//paymentAndReservation

makePaymentAndReservation(body:PaymentAndReservation):Observable<PaymentAndReservation>{

  console.log(body);

    return this.http.post<PaymentAndReservation>(this.baseURL+"payments/makePaymentAndReservation",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

//payments


viewpaymentHistory(customerId:number):Observable<PaymentListDTO[]>{
  console.log(customerId)
 return this.http.get<PaymentListDTO[]>(this.baseURL+`payments/viewPaymentHistory/${customerId}`,{ headers: this.getHeaders(), responseType: 'json' });
}

getAllPayments():Observable<PaymentListDTO[]>{
  
  return this.http.get<PaymentListDTO[]>(this.baseURL+"payments/getAllPayments",{ headers: this.getHeaders() });
}


//reservations

cancelReservation(reservationId:number):Observable<string>{
  console.log(reservationId);
  return this.http.delete<string>("http://localhost:8080/roadready/reservations/cancelReservation"+`/${reservationId}`,{ headers: this.getHeaders()});

}

modifyReservation(reservationId:number,dateOfPickup:string,dateOfDropoff:string):Observable<Reservation>{
  console.log(reservationId ,dateOfPickup ,dateOfDropoff );
  console.log(typeof dateOfPickup);

 return this.http.put<Reservation>("http://localhost:8080/roadready/reservations/modifyReservation"+ `/${reservationId}`+ `/${dateOfPickup}` +`/${dateOfDropoff}`, null, { headers: this.getHeaders()});
}



viewReservationHistory(customerId:number):Observable<ReservationListDTO[]>{
  console.log(customerId);
 return this.http.get<ReservationListDTO[]>(this.baseURL+"reservations/viewReservationHistory"+`/${customerId}`,{ headers: this.getHeaders(), responseType:'json' });
}



getAllReservations():Observable<ReservationListDTO[]>{
  
  return this.http.get<ReservationListDTO[]>(this.baseURL+"reservations/getAllReservations",{ headers: this.getHeaders(), responseType: 'json'});
}



//agent

insertAgent(body: Agent):Observable<Agent> {

  console.log(body);

  return this.http.post<Agent>(this.baseURL+"agents/createNewAgentAccount",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

deleteAgentById(agentId:number):Observable<string>{

  return  this.http.delete<string>(this.baseURL+`agents/deleteAgentById/${agentId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
getAgentById(agentId:number):Observable<Agent[]>{

  console.log(agentId)
 return this.http.get<Agent[]>(this.baseURL+`agents/getAgentById/${agentId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
updateAgentDetails(body:Agent):Observable<Agent[]>{

  console.log(body);
  return this.http.put<Agent[]>(this.baseURL+"agents/updateAgentById",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

getAllAgents(): Observable<Agent[]> {

  return this.http.get<Agent[]>(this.baseURL+"agents/getAllAgents",{headers:this.getHeaders()});

}

/*CheckIn(reservationId:number):Observable<Reservation[]>{
  console.log(reservationId);
  return this.http.get<Reservation[]>(this.baseURL+`agents/checkin/${reservationId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}*/


 /* checkOut(reservationId:number):Observable<Reservation[]>{
        console.log(reservationId);
        return this.http.get<Reservation[]>(this.baseURL+`agents/checkout/${reservationId}/${carStatus}`);
      }*/

//admin

insertAdmin(body: Admin) {

  console.log(body);

  return this.http.post<Admin>(this.baseURL+"admin/addAdmin",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
getReportByCustomerId(customerId:number):Observable<string>{

  console.log(customerId)
 return this.http.get<string>("http://localhost:8080/roadready/admin/revenueGeneratedByCustomer"+`/${customerId}`,{ headers: this.getHeaders() ,responseType:  'text' as 'json'   });

}


getReportByDates(start :string, end :string ):Observable<string>{

  console.log(start , end );
 return this.http.get<string>("http://localhost:8080/roadready/admin/revenueReportBetweenDates"+`/${start}`+`/${end}`,{ headers: this.getHeaders() , responseType:  'text' as 'json'  });

}
getAllRevenueReport(): Observable<string> {

  return this.http.get<string>(this.baseURL+"admin/totalRevenueReport",{ headers: this.getHeaders()});

}

totalRevenue():Observable<number>{

  return this.http.get<number>(this.baseURL+"admin/totalRevenue" , { headers: this.getHeaders()})
}

//feedbacks

viewAllFeedbacks(): Observable<Feedback[]> {

  return this.http.get<Feedback[]>(this.baseURL+"feedbacks/viewAllCustomerFeedBacks",{ headers: this.getHeaders()});

}

insertCustomerFeedback(body: Feedback) {

  console.log(body);

  return this.http.post<Feedback>(this.baseURL+"feedbacks/CustomerFeedback",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

insertAdminFeedback(feedbackId:number,adminFeedback:string):Observable<string>{
   console.log("http://localhost:8080/roadready/feedbacks/adminFeedBack" + `/${feedbackId}`+`/${adminFeedback}`);

  return this.http.post<string>("http://localhost:8080/roadready/feedbacks/adminFeedBack" + `/${feedbackId}`+`/${adminFeedback}`,null,{headers:this.getHeaders(),responseType: 'text' as 'json'})
}





  uploadCustomerIdentity(file:File , customerId: number):Observable<String>{
  
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<string>("http://localhost:8080/roadready/customerIdentity/uploadCustomerIdentity"+ `/${customerId}`, formData,{ headers: this.getHeadersForFile() , responseType: 'text' as 'json' });
  }

  

  getCustomerIdentity(id: number): Observable<Blob> {
    console.log("http://localhost:8080/roadready/customerIdentity/getCustomerIdentity"+ `/${id}`)
    return this.http.get("http://localhost:8080/roadready/customerIdentity/getCustomerIdentity"+ `/${id}`, {headers:this.getHeadersForDisplayingFile(), responseType: 'blob'});
  }


  deleteCustomerIdentity(customerId:number):Observable<string>{

    return this.http.delete<string>("http://localhost:8080/roadready/customerIdentity/deleteCustomerIdentity"+`/${customerId}` ,{ headers: this.getHeaders()} )

  }



  CheckIn(reservationId:number):Observable<string>{
    console.log(reservationId);
    return this.http.get<string>("http://localhost:8080/roadready/agents/checkin"+`/${reservationId}`,{ headers: this.getHeaders() , responseType:'text' as 'json'});
  }
  
  updateCarStatus (carStatus:string,carId:number):Observable<Car>{
     
    console.log(this.baseURL+"agents/updateCarAvailability"+`/${carStatus}`+`/${carId}`);
 
    return this.http.put<Car>("http://localhost:8080/roadready/agents/updateCarAvailability"+`/${carStatus}`+`/${carId}`, "null",{ headers: this.getHeaders()});
  
  }
  
    checkingOut(reservationId:number,carStatus:string): Observable<string>{
          console.log(reservationId);
          
          return this.http.get<string>(this.baseURL+"agents/checkout"+`/${reservationId}`+`/${carStatus}`,{ headers: this.getHeaders() , responseType:'text' as 'json'});
        }

registerCustomer(body:Customer):Observable<Customer>{

  return this.http.post<Customer>(this.baseURL+"user/createNewCustomerAccount",body, {responseType: 'text' as 'json'})
}

newPasswordGeneration(body:Password):Observable<string>{

  console.log(body);
  return this.http.put<string>(this.baseURL+"password/update",body,{ responseType: 'text' as 'json' });
}

}






