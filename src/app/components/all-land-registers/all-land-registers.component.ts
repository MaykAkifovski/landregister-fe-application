import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {LandRegister} from '../../models/LandRegister';

@Component({
  selector: 'app-all-land-registers',
  templateUrl: './all-land-registers.component.html',
  styleUrls: ['./all-land-registers.component.css']
})
export class AllLandRegistersComponent implements OnInit {

  landRegisters: LandRegister[] = [
    {
      docType: 'landRegister_1',
      reservationNote: false
    },
    {
      docType: 'landRegister_2',
      reservationNote: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
