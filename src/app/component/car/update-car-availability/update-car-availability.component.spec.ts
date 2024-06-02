import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarAvailabilityComponent } from './update-car-availability.component';

describe('UpdateCarAvailabilityComponent', () => {
  let component: UpdateCarAvailabilityComponent;
  let fixture: ComponentFixture<UpdateCarAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCarAvailabilityComponent]
    });
    fixture = TestBed.createComponent(UpdateCarAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
