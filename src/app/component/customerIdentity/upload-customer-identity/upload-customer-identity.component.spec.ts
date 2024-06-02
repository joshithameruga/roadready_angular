import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCustomerIdentityComponent } from './upload-customer-identity.component';

describe('UploadCustomerIdentityComponent', () => {
  let component: UploadCustomerIdentityComponent;
  let fixture: ComponentFixture<UploadCustomerIdentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadCustomerIdentityComponent]
    });
    fixture = TestBed.createComponent(UploadCustomerIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
