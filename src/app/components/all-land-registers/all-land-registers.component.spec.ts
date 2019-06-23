import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLandRegistersComponent } from './all-land-registers.component';

describe('AllLandRegistersComponent', () => {
  let component: AllLandRegistersComponent;
  let fixture: ComponentFixture<AllLandRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLandRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLandRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
