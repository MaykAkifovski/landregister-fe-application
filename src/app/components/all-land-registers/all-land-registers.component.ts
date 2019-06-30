import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {LandRegister} from '../../models/LandRegister';
import {LandRegisterService} from '../../services/land-register.service';

@Component({
  selector: 'app-all-land-registers',
  templateUrl: './all-land-registers.component.html',
  styleUrls: ['./all-land-registers.component.css']
})
export class AllLandRegistersComponent implements OnInit {

  landRegisters: LandRegister[] = [];

  constructor(private landRegisterService: LandRegisterService) {
  }

  ngOnInit() {
    this.landRegisterService.queryAllLandRegisters()
      .subscribe(landRegisters => {
        this.landRegisters = landRegisters;
      });
  }

}
