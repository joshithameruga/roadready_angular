import { Car } from "./car";
import { Customer } from "./customer";
import { Payment } from "./payment";

export interface Reservation {
    reservationId: number;
    reservationStatus: string;
    dateOfReservation: Date; 
    dateOfPickup: Date; 
    dateOfDropoff: Date; 
    customer: Customer;
    car: Car;
    payment: Payment;
  }