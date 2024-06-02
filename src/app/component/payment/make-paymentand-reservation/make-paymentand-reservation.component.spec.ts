import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePaymentandReservationComponent } from './make-paymentand-reservation.component';

describe('MakePaymentandReservationComponent', () => {
  let component: MakePaymentandReservationComponent;
  let fixture: ComponentFixture<MakePaymentandReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakePaymentandReservationComponent]
    });
    fixture = TestBed.createComponent(MakePaymentandReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
