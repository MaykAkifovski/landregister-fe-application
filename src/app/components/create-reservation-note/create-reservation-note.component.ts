import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {LandRegisterService} from '../../services/land-register.service';
import {ReservationNoteRequest} from '../../models/ReservationNoteRequest';

@Component({
  selector: 'app-create-reservation-note',
  templateUrl: './create-reservation-note.component.html',
  styleUrls: ['./create-reservation-note.component.css']
})
export class CreateReservationNoteComponent implements OnInit {

  reservationNoteRequest = this.fb.group(
    {
      docType: ['landRegister'],
      titlePage: this.fb.group({
          districtCourt: ['', Validators.required],
          landRegistryDistrict: ['', Validators.required],
          sheetNumber: ['', Validators.required]
        }
      ),
      inventoryRegister: this.fb.group({
          subdistrict: ['', Validators.required],
          hall: ['', Validators.required],
          parcel: ['', Validators.required],
          economicType: ['', Validators.required],
          location: ['', Validators.required],
          size: ['', Validators.required]
        }
      ),
      owners: this.fb.array([
          this.fb.group({
              identityNumber: ['', Validators.required],
              title: ['', Validators.required],
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              dateOfBirth: ['', Validators.required],
              postcode: ['', Validators.required],
              city: ['', Validators.required],
              street: ['', Validators.required],
              streetNumber: ['', Validators.required]
            }
          )
        ]
      )
    }
  );

  constructor(private fb: FormBuilder, private landRegisterService: LandRegisterService) {
  }

  ngOnInit() {
  }

  get owners() {
    return this.reservationNoteRequest.get('owners') as FormArray;
  }

  addOwner() {
    this.owners.push(
      this.fb.group({
          identityNumber: ['', Validators.required],
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dateOfBirth: ['', Validators.required],
          postcode: ['', Validators.required],
          city: ['', Validators.required],
          street: ['', Validators.required],
          streetNumber: ['', Validators.required]
        }
      )
    );
  }

  removeOwner() {
    this.owners.removeAt(this.owners.length - 1);
  }

  createReservationNote() {
    const reservationNoteRequest: ReservationNoteRequest = this.reservationNoteRequest.value as ReservationNoteRequest;
    this.landRegisterService.createReservationNote(reservationNoteRequest).subscribe();
  }
}