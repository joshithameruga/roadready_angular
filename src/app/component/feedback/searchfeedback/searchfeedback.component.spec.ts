import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfeedbackComponent } from './searchfeedback.component';

describe('SearchfeedbackComponent', () => {
  let component: SearchfeedbackComponent;
  let fixture: ComponentFixture<SearchfeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchfeedbackComponent]
    });
    fixture = TestBed.createComponent(SearchfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
