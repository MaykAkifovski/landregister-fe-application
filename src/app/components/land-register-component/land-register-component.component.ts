import {Component, Input, OnInit} from '@angular/core';

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
