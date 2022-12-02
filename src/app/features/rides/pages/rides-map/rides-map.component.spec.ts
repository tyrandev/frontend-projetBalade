import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesMapComponent } from './rides-map.component';

describe('RidesMapComponent', () => {
  let component: RidesMapComponent;
  let fixture: ComponentFixture<RidesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
