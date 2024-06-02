import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerPaymentsComponent } from './view-customer-payments.component';

describe('ViewCustomerPaymentsComponent', () => {
  let component: ViewCustomerPaymentsComponent;
  let fixture: ComponentFixture<ViewCustomerPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCustomerPaymentsComponent]
    });
    fixture = TestBed.createComponent(ViewCustomerPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
