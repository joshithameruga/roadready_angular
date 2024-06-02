export interface PaymentAndReservation{
    "customerId": number;
    "carId": number;
    "amountPaid": number;
    "modeOfPayment":string;
    "dateOfPickup": Date;
    "dateOfDropOff": Date
  }
  