import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {LandRegister} from '../../models/LandRegister';

@Component({
  selector: 'app-create-land-register',
  templateUrl: './create-land-register.component.html',
  styleUrls: ['./create-land-register.component.css']
})
export class CreateLandRegisterComponent implements OnInit {

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

}
