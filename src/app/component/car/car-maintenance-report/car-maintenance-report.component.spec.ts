import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMaintenanceReportComponent } from './car-maintenance-report.component';

describe('CarMaintenanceReportComponent', () => {
  let component: CarMaintenanceReportComponent;
  let fixture: ComponentFixture<CarMaintenanceReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarMaintenanceReportComponent]
    });
    fixture = TestBed.createComponent(CarMaintenanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
