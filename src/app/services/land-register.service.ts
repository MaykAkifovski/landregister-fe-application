import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {LandRegister} from '../models/LandRegister';
import {Observable} from 'rxjs';

const url = 'http://localhost:8080';
const queryAllLandRegisters = '/queryAllLandRegisters';

@Injectable({
  providedIn: 'root'
})
export class LandRegisterService {

  constructor(private htteClient: HttpClient) {
  }

  queryAllLandRegisters(): Observable<LandRegister[]> {
    return this.htteClient.get<LandRegister[]>(url + queryAllLandRegisters);
  }
}
