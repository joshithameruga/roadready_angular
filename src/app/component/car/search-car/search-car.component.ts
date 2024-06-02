import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../../service/service';
import { Car } from '../../../model/car';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent {



  carSearchList: Car[] = [];
  carPageList:Car[]=[];
  
  carList:Car[]=[];
  carMakes: string[] = ['Toyota', 'Honda', 'Ford' , 'MarutiSuzuki','Hyundai','TataMotors','Mahindra','Kia','Volkswagen','Renault',]; // Add more makes as needed
  discounts: number[] = [5, 10, 15]; // Add more discounts as needed
  selectedCarMake: string = '';
  selectedDiscount: number = 0;

  // Define properties for pagination
  pageSize = 5;  //items per page
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 0; // Current page index


  // ViewChild to access the paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private carService: Service ,private router:Router){}
  data:string = '';

  searchId!: number;
   

    ngOnInit(){
      this.getAllCars();
      
        window.history.pushState(null, '', window.location.href);
        window.onpopstate = function() {
          window.history.pushState(null, '', window.location.href);
        };
      
      
    }
  
 
    findCar(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }

  getCarById(carId: number) {

    console.log(carId)

    this.carService.getCarById(carId).subscribe((c) => { console.log("car obtained" + c) });
  }

  getAllCars() {

    this.carService.getAllCars().subscribe((cars) => {
      this.carSearchList = cars; console.log("list" + cars);
      this.onPageChange({
        pageIndex: this.currentPage, pageSize: this.pageSize,
        length: 0
      }); // Trigger pagination

    });


  }


  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.carPageList = this.carSearchList.slice(startIndex, endIndex);
  }


  deleteCarById(id:number){
        
    this.carService.deleteCarById(id).subscribe(() => { console.log('Car deleted successfully')});
   
 }
  getCarImage(car:any){

  }

  discountOnCarMake(){

    console.log(this.selectedCarMake, this.selectedDiscount);

    this.carService.discountOnCarMake( this.selectedCarMake, this.selectedDiscount).subscribe((cars)=> { this.carList = cars; console.log("list" + cars);
  });
    
    this.getAllCars();
}




}