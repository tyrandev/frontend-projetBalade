import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRideComponent } from './detail-ride.component';

describe('DetailRideComponent', () => {
  let component: DetailRideComponent;
  let fixture: ComponentFixture<DetailRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
