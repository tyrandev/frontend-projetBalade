import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListViewComponent } from './dogs-list-view.component';

describe('DogListComponent', () => {
  let component: DogsListViewComponent;
  let fixture: ComponentFixture<DogsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
