import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReservationsComponent } from './search-reservations.component';

describe('SearchReservationsComponent', () => {
  let component: SearchReservationsComponent;
  let fixture: ComponentFixture<SearchReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchReservationsComponent]
    });
    fixture = TestBed.createComponent(SearchReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
