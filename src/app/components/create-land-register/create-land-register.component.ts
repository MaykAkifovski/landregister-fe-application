import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LandRegister} from '../../models/LandRegister';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-land-register',
  templateUrl: './create-land-register.component.html',
  styleUrls: ['./create-land-register.component.css']
})
export class CreateLandRegisterComponent implements OnInit {
  @Output() createLandRegister: EventEmitter<LandRegister> = new EventEmitter();

  landRegister = this.fb.group(
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
      ),
      reservationNote: [false, Validators.required],
    }
  );

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  get owners() {
    return this.landRegister.get('owners') as FormArray;
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

  removeOwner(index) {
    this.owners.removeAt(index - 1);
  }
}
