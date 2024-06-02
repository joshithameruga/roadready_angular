import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerReservatioonComponent } from './view-customer-reservatioon.component';

describe('ViewCustomerReservatioonComponent', () => {
  let component: ViewCustomerReservatioonComponent;
  let fixture: ComponentFixture<ViewCustomerReservatioonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCustomerReservatioonComponent]
    });
    fixture = TestBed.createComponent(ViewCustomerReservatioonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
