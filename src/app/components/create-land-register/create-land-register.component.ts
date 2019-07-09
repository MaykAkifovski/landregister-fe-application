import {Component, OnInit} from '@angular/core';
import {LandRegister} from '../../models/LandRegister';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {LandRegisterService} from '../../services/land-register.service';
import {MatSnackBar} from '@angular/material';
import {FrontendResponse} from '../../models/FrontendResponse';

const creationSuccessfulMessage = 'Land register successfully created';
const creationFailedMessage = 'Land register creation failed with message: ';

@Component({
  selector: 'app-create-land-register',
  templateUrl: './create-land-register.component.html',
  styleUrls: ['./create-land-register.component.css']
})
export class CreateLandRegisterComponent implements OnInit {

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
      reservationNote: [false],
    }
  );

  constructor(private fb: FormBuilder, private landRegisterService: LandRegisterService, private matSnackBar: MatSnackBar) {
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

  removeOwner() {
    this.owners.removeAt(this.owners.length - 1);
  }

  createLandRegister() {
    const newLandRegister: LandRegister = this.landRegister.value as LandRegister;

    this.landRegisterService.createLandRegister(newLandRegister)
      .subscribe(frontendResponse => this.showMessage(frontendResponse));
  }

  showMessage(frontendResponse: FrontendResponse) {
    let snackBarMessage;
    if (frontendResponse.message === '') {
      snackBarMessage = creationSuccessfulMessage;
    } else {
      snackBarMessage = creationFailedMessage + frontendResponse.message;
    }
    const snackBarRef = this.createSnackBar(snackBarMessage);
    snackBarRef._dismissAfter(5000);
  }

  createSnackBar(snackBarMessage: string) {
    return this.matSnackBar.open(snackBarMessage, '', {
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }
}
