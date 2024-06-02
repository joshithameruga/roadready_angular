import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByIdComponent } from './search-by-id.component';

describe('SearchByIdComponent', () => {
  let component: SearchByIdComponent;
  let fixture: ComponentFixture<SearchByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByIdComponent]
    });
    fixture = TestBed.createComponent(SearchByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
