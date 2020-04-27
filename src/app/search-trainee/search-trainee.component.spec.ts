import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTraineeComponent } from './search-trainee.component';

describe('SearchTraineeComponent', () => {
  let component: SearchTraineeComponent;
  let fixture: ComponentFixture<SearchTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
