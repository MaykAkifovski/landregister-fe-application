import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRegisterComponentComponent } from './land-register-component.component';

describe('LandRegisterComponentComponent', () => {
  let component: LandRegisterComponentComponent;
  let fixture: ComponentFixture<LandRegisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandRegisterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
