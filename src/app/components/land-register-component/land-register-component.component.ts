import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
// @ts-ignore
import {LandRegister} from '../../models/LandRegister';

@Component({
  selector: 'app-land-register-component',
  templateUrl: './land-register-component.component.html',
  styleUrls: ['./land-register-component.component.css']
})
export class LandRegisterComponentComponent implements OnInit {

  @Input() landRegister;

  constructor() {
  }

  ngOnInit() {
  }

}
