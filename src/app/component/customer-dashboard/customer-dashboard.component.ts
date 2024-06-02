import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from '../../model/car';
import { Service } from '../../service/service';
import { JwtClientService } from '../../service/jwt-client.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

 

  constructor(private service:Service,private router: Router,private jwtService:JwtClientService){}
   
  carSearchList:Car[] = [];
  carFilterList:Car[]=[];
  imageUrl : string ="";

  isRadioButtonClicked: boolean = false; 

  price: number=0;

  ngOnInit(){
    this.getAvailableCars();

    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };
    
  }

        
  applyLocationFilter(filter:string){
            
          
    this.carFilterList = this.carSearchList.filter(car => car.location === filter);
    this.isRadioButtonClicked = true;
    
  } 
  

  applyMakeFilter(filter:string){
    this.carFilterList = this.carSearchList.filter(car => car.make === filter);
    this.isRadioButtonClicked = true;
  }
  
  applySpecificationFilter(filter:string){

    this.carFilterList = this.carSearchList.filter(car => car.specifications === filter);
    this.isRadioButtonClicked = true;
  }
  

  applyPassengerFilter(filter:number){

    this.carFilterList = this.carSearchList.filter(car => car.passengerCapacity === filter);
    this.isRadioButtonClicked = true;
  }

        
        
        isTabOpen: boolean = false;

        toggleTab() {
          this.isTabOpen = !this.isTabOpen;
        }
      
        openTab(tab:string){

        }

  clearSelection(){
    this.isRadioButtonClicked=false;
 
}

        
getAvailableCars(){
  this.service.getAvailableCars().subscribe((cars) => {
    this.carSearchList = cars;
    console.log("list", cars); // Log the car list
  });
}

getCarImage(car: any): string {
 
  if (car.make === 'MarutiSuzuki') {
    if (car.model === 'Swift') {
      return "../assets/marutiSwift.jpeg";
    } else if (car.model === 'Baleno') {
      return  "../assets/marutiBaleno.jpg";
    } else if (car.model === 'Dzire') {
      return "../assets/marutiDzire.jpeg";
    } else if (car.model === 'Alto') {
      return "../assets/marutiAlto.png";
    } else if (car.model === 'Vitara Brezza') {
      return "../assets/marutiBrezza.jpg";
    }
  } else if (car.make === 'Hyundai') {
    if (car.model === 'i20') {
      return "../assets/hyundaiI20.jpg";
    } else if (car.model === 'Creta') {
      return "../assets/hyundaiCreta.jpeg";
    } else if (car.model === 'Venue') {
      return "../assets/hyundaiVenue.jpg";
    } else if (car.model === 'Grand i10') {
      return "../assets/hyundaiGrandi10.jpg";
    } else if (car.model === 'Verna') {
      return "../assets/hyundaiVerna.png";
    }
  } else if (car.make === 'TataMotors') {
    if (car.model === 'Nexon') {
      return "../assets/tataNexon.jpg";
    } else if (car.model === 'Altroz') {
      return "../assets/tataAltriz.jpg";
    } else if (car.model === 'Tiago') {
      return "../assets/tataTiago.jpg";
    } else if (car.model === 'Harrier') {
      return "../assets/tataHarrier.png";
    } else if (car.model === 'Safari') {
      return "../assets/tataSafari.png";
    }
  } else if (car.make === 'Mahindra') {
    if (car.model === 'Scorpio') {
      return "../assets/mahindraScorpio.jpg";
    } else if (car.model === 'XUV300') {
      return "../assets/mahindraXUV300.png";
    } else if (car.model === 'Thar') {
      return "../assets/mahindraThar.jpeg";
    } else if (car.model === 'Bolero') {
      return "../assets/mahindraBolero.jpg";
    } else if (car.model === 'XUV500') {
      return "../assets/mahindraXUV500.jpg";
    }
  } else if (car.make === 'Ford') {
    if (car.model === 'Figo') {
      return "../assets/fordFigo.jpg";
    }  else if (car.model === 'Fiesta') {
      return "../assets/fordFiesta.jpg";
    }else if (car.model === 'Ecosport') {
      return "../assets/fordEcosport.jpeg";
    }else if (car.model === 'Endeavour') {
      return "../assets/fordEndeavour.png";
    }
  }else if (car.make === 'Kia') {
    if (car.model === 'Sonet') {
      return "../assets/kiaSonet.png";
    }  else if (car.model === 'Seltos') {
      return "../assets/kiaSeltos.jpeg";
    }else if (car.model === 'Carnival') {
      return "../assets/kiaCarnival.jpg";
    }else if (car.model === 'Rio') {
      return "../assets/kiaRio.png";
    }
  }else if (car.make === 'Honda') {
    if (car.model === 'City') {
      return "../assets/hondaCity.jpeg";
    }  else if (car.model === 'Amaze') {
      return "../assets/hondaAmaze.jpeg";
    }else if (car.model === 'Jazz') {
      return "../assets/hondaJazz.png";
    }else if (car.model === 'Elevate') {
      return "../assets/hondaElevate.jpg";
    }
  }else if (car.make === 'Toyota') {
    if (car.model === 'UrbanCruiser') {
      return "../assets/toyotaUrbanCruiser.jpg";
    }  else if (car.model === 'InnovaHycorss') {
      return "../assets/toyotaInnovaHycrosss.jpg";
    }else if (car.model === 'Fortuner') {
      return "../assets/toyotaFortuner.jpg";
    }else if (car.model === 'InnovaCrysta') {
      return "../assets/toyotaInnovaCrysta.jpg";
    }
  }else if (car.make === 'Volkswagen') {
    if (car.model === 'Tiguan') {
      return "../assets/volkswagenTiguan.jpg";
    }  else if (car.model === 'Ameo') {
      return "../assets/volkswagenAmeo.jpg";
    }else if (car.model === 'Vento') {
      return "../assets/volkswagenVento.jpg";
    }else if (car.model === 'Jetta') {
      return "../assets/volkswagenJetta.jpg";
    }
  }else if (car.make === 'Renault') {
    if (car.model === 'Kiger') {
      return "../assets/renaultKiger.jpg";
    }  else if (car.model === 'Duster') {
      return "../assets/renaultDuster.jpg";
    }else if (car.model === 'Triber') {
      return "../assets/renaultTriber.jpg";
    }else if (car.model === 'Kwid') {
      return "../assets/renaultKwid.jpg";
    }
  }
  
    return "../assets/carimage.png"; // Default image path if no specific image found
  
  
}


logout(): void {

  this.jwtService.clearStoredToken();
  this.router.navigate(['/login']);
}






}




/*
  if (car.make === 'Maruti Suzuki') {
    if (car.model === 'Swift') {
      return "../assets/maruti_swift.jpg";
    } else if (car.model === 'Baleno') {
      return  "../assets/maruti_baleno.jpg";
    } else if (car.model === 'Dzire') {
      return "../assets/maruti_dzire.jpg";
    } else if (car.model === 'Alto') {
      return "../assets/maruti_alto.jpg";
    } else if (car.model === 'Vitara Brezza') {
      return "../assets/maruti_vitara_brezza.jpg";
    }
  } else if (car.make === 'Hyundai') {
    if (car.model === 'i20') {
      return "../assets/hyundai_i20.jpg";
    } else if (car.model === 'Creta') {
      return "../assets/hyundai_creta.jpg";
    } else if (car.model === 'Venue') {
      return "../assets/hyundai_venue.jpg";
    } else if (car.model === 'Grand i10') {
      return "../assets/hyundai_grand_i10.jpg";
    } else if (car.model === 'Verna') {
      return "../assets/hyundai_verna.jpg";
    }
  } else if (car.make === 'Tata Motors') {
    if (car.model === 'Nexon') {
      return "../assets/tata_nexon.jpg";
    } else if (car.model === 'Altroz') {
      return "../assets/tata_altroz.jpg";
    } else if (car.model === 'Tiago') {
      return "../assets/tata_tiago.jpg";
    } else if (car.model === 'Harrier') {
      return "../assets/tata_harrier.jpg";
    } else if (car.model === 'Safari') {
      return "../assets/tata_safari.jpg";
    }
  } else if (car.make === 'Mahindra') {
    if (car.model === 'Scorpio') {
      return "../assets/mahindra_scorpio.jpg";
    } else if (car.model === 'XUV300') {
      return "../assets/mahindra_xuv300.jpg";
    } else if (car.model === 'Thar') {
      return "../assets/mahindra_thar.jpg";
    } else if (car.model === 'Bolero') {
      return "../assets/mahindra_bolero.jpg";
    } else if (car.model === 'XUV500') {
      return "../assets/mahindra_xuv500.jpg";
    }*/