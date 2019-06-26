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
      titlePage: {
        districtCourt: 'Berlin',
        landRegistryDistrict: 'Lichtenberg',
        sheetNumber: '1231'
      },
      inventoryRegister: {
        subdistrict: 'Lichtenberg',
        economicType: 'EconomicType',
        hall: 'Hall',
        location: 'Street Number',
        parcel: 'Parcel 123',
        size: '1231 m2'
      },
      owners: [
        {
          identityNumber: '1',
          title: 'Mr',
          firstname: 'Moritz',
          lastname: 'Bach',
          dateOfBirth: '12.03.1994',
          city: 'Berlin',
          postcode: '10xxx',
          street: 'Street',
          streetnumber: 'N'
        },
        {
          identityNumber: '2',
          title: 'Ms',
          firstname: 'Mery',
          lastname: 'Bach',
          dateOfBirth: '15.01.1995',
          city: 'Berlin',
          postcode: '10xxx',
          street: 'Street',
          streetnumber: 'N'
        }
      ],
      reservationNote: false
    },
    {
      docType: 'landRegister_2',
      titlePage: {
        districtCourt: 'Berlin',
        landRegistryDistrict: 'Mitte',
        sheetNumber: '1452'
      },
      inventoryRegister: {
        subdistrict: 'Mitte',
        economicType: 'EconomicType',
        hall: 'Hall',
        location: 'Street Number',
        parcel: 'Parcel 12',
        size: '800 m2'
      },
      owners: [
        {
          identityNumber: '3',
          title: 'Mr',
          firstname: 'Pepe',
          lastname: 'Mach',
          dateOfBirth: '17.02.1994',
          city: 'Berlin',
          postcode: '10xxx',
          street: 'Street',
          streetnumber: 'N'
        },
        {
          identityNumber: '4',
          title: 'Ms',
          firstname: 'Assa',
          lastname: 'Mach',
          dateOfBirth: '20.06.1995',
          city: 'Berlin',
          postcode: '10xxx',
          street: 'Street',
          streetnumber: 'N'
        }
      ],
      reservationNote: true
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
