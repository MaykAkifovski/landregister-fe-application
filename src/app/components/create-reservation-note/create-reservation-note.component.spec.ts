import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateReservationNoteComponent} from './create-reservation-note.component';

describe('CreateReservationNoteComponent', () => {
  let component: CreateReservationNoteComponent;
  let fixture: ComponentFixture<CreateReservationNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReservationNoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
