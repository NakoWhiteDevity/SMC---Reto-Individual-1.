import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviztestingComponent } from './dataviztesting.component';

describe('DataviztestingComponent', () => {
  let component: DataviztestingComponent;
  let fixture: ComponentFixture<DataviztestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviztestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviztestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
