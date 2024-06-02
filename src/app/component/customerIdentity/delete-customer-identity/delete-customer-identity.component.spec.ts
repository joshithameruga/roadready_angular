import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerIdentityComponent } from './delete-customer-identity.component';

describe('DeleteCustomerIdentityComponent', () => {
  let component: DeleteCustomerIdentityComponent;
  let fixture: ComponentFixture<DeleteCustomerIdentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCustomerIdentityComponent]
    });
    fixture = TestBed.createComponent(DeleteCustomerIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
