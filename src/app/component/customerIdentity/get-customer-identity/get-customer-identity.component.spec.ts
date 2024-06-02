import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerIdentityComponent } from './get-customer-identity.component';

describe('GetCustomerIdentityComponent', () => {
  let component: GetCustomerIdentityComponent;
  let fixture: ComponentFixture<GetCustomerIdentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCustomerIdentityComponent]
    });
    fixture = TestBed.createComponent(GetCustomerIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
