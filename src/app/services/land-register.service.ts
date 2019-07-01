import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {LandRegister} from '../models/LandRegister';
import {Observable} from 'rxjs';

const url = 'http://149.233.56.37:8080';
const queryAllLandRegisters = '/queryAllLandRegisters';
const registerEnrollUser = '/registerEnrollUser';

@Injectable({
  providedIn: 'root'
})
export class LandRegisterService {

  constructor(private httpClient: HttpClient) {
    // this.httpClient.get(url + registerEnrollUser)
    //   .subscribe();
  }

  queryAllLandRegisters(): Observable<LandRegister[]> {
    return this.httpClient.get<LandRegister[]>(url + queryAllLandRegisters);
  }
}
