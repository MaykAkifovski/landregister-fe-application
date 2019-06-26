import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandRegisterComponent } from './create-land-register.component';

describe('CreateLandRegisterComponent', () => {
  let component: CreateLandRegisterComponent;
  let fixture: ComponentFixture<CreateLandRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLandRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLandRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
