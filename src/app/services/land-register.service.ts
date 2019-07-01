import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {LandRegister} from '../models/LandRegister';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

const url = 'http://149.233.56.37:8080';
const queryAllLandRegisters = '/queryAllLandRegisters';
const registerEnrollUser = '/registerEnrollUser';
const createLandRegister = '/createLandRegister';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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

  createLandRegister(newLandRegister: LandRegister): Observable<LandRegister> {
    return this.httpClient.post<LandRegister>(url + createLandRegister, newLandRegister, httpOptions)
      .pipe(catchError(() => this.handleError('createLandRegister')));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T); // Let the app keep running by returning an empty result.
    };
  }
}
