
import { Customer } from "./customer";

export interface Payment {
    paymentId: number;
    amountPaid: number;
    dateOfPayment: Date; 
    modeOfPayment: string;
    customer: Customer;
  }
  

  