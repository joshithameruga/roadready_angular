import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../../../model/reservation';
import { Service } from '../../../service/service';
import { ReservationListDTO } from 'src/app/model/reservationListDTO';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-search-reservations',
  templateUrl: './search-reservations.component.html',
  styleUrls: ['./search-reservations.component.css']
})
export class SearchReservationsComponent {

  reservationSearchList:ReservationListDTO[] =[];

  searchId!:number;

  // Define properties for pagination
  pageSize = 5;  //items per page
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 0; // Current page index
  reservationPageList:ReservationListDTO[]=[];


  // ViewChild to access the paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reservationService:Service , private route: ActivatedRoute){}

  ngOnInit(){
    this.getAllReservations();
    console.log(this.reservationSearchList);

    
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
      };
    
  }

  getReservationOfCustomer(reservationId:number){
    
    console.log(reservationId)

     // this.reservationService.getReservationsOfCustomer(reservationId).subscribe((cust) => {console.log("customer obtained"+cust)});
      
  }

  getAllReservations(){
    
    this.reservationService.getAllReservations().subscribe((reservations)=> {  this.reservationSearchList = reservations; });
    this.onPageChange({
      pageIndex: this.currentPage, pageSize: this.pageSize,
      length: 0
    }); // Trigger pagination

  }

  
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.reservationPageList = this.reservationSearchList.slice(startIndex, endIndex);
  }

}