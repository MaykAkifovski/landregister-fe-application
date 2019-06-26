import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// @ts-ignore
import {LandRegister} from '../../models/LandRegister';

@Component({
  selector: 'app-create-land-register',
  templateUrl: './create-land-register.component.html',
  styleUrls: ['./create-land-register.component.css']
})
export class CreateLandRegisterComponent implements OnInit {
  @Output() createLandRegister: EventEmitter<LandRegister> = new EventEmitter();

  landRegister: LandRegister = {
    docType: 'landRegister',
    titlePage: {},
    inventoryRegister: {},
    owners: [{}, {}],
    reservationNote: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createLandRegister.emit(this.landRegister);
    console.log('onSubmit()' + this.landRegister);
  }
}
