import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesListViewComponent } from './rides-list-view.component';

describe('RideListComponent', () => {
  let component: RidesListViewComponent;
  let fixture: ComponentFixture<RidesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
