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

  coOwnershipPercentages = [
    {value: 5, viewValue: '5% Co-ownership'},
    {value: 10, viewValue: '10% Co-ownership'},
    {value: 15, viewValue: '15% Co-ownership'},
    {value: 20, viewValue: '20% Co-ownership'},
    {value: 25, viewValue: '25% Co-ownership'},
    {value: 30, viewValue: '30% Co-ownership'},
    {value: 35, viewValue: '35% Co-ownership'},
    {value: 40, viewValue: '40% Co-ownership'},
    {value: 45, viewValue: '45% Co-ownership'},
    {value: 50, viewValue: '50% Co-ownership'},
    {value: 55, viewValue: '55% Co-ownership'},
    {value: 60, viewValue: '60% Co-ownership'},
    {value: 65, viewValue: '65% Co-ownership'},
    {value: 70, viewValue: '70% Co-ownership'},
    {value: 75, viewValue: '75% Co-ownership'},
    {value: 80, viewValue: '80% Co-ownership'},
    {value: 85, viewValue: '85% Co-ownership'},
    {value: 90, viewValue: '90% Co-ownership'},
    {value: 95, viewValue: '95% Co-ownership'},
    {value: 100, viewValue: '100% Co-ownership'}
  ];

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
              streetNumber: ['', Validators.required],
              coOwnership: ['', Validators.required]
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
          streetNumber: ['', Validators.required],
          coOwnership: ['', Validators.required]
        }
      )
    );
  }

  removeOwner() {
    this.owners.removeAt(this.owners.length - 1);
  }

  createLandRegister() {
    const newLandRegister: LandRegister = this.landRegister.value as LandRegister;

    if (this.isCoOwnership100(newLandRegister)) {
      this.landRegisterService.createLandRegister(newLandRegister)
        .subscribe(frontendResponse => this.showMessage(frontendResponse));
    } else {
      const snackBarMessage = 'Total Co-ownership must be 100%!';
      const snackBarRef = this.createSnackBar(snackBarMessage);
      snackBarRef._dismissAfter(5000);
    }
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

  isCoOwnership100(newLandRegister: LandRegister): boolean {
    const totalCoOwnership = newLandRegister.owners
      .map(owner => owner.coOwnership)
      .map(ownerCoOwnership => parseInt(ownerCoOwnership, 10))
      .reduce(((accumulator, currentValue) => accumulator + currentValue));
    return totalCoOwnership === 100;
  }

  createSnackBar(snackBarMessage: string) {
    return this.matSnackBar.open(snackBarMessage, '', {
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }
}
