import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LandRegister} from '../models/LandRegister';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ReservationNoteRequest} from '../models/ReservationNoteRequest';
import {FrontendResponse} from '../models/FrontendResponse';

const url = 'http://149.233.56.37:8080';
const queryAllLandRegisters = '/queryAllLandRegisters';
const registerEnrollUser = '/registerEnrollUser';
const createLandRegister = '/createLandRegister';
const createReservationNote = '/createReservationNote';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LandRegisterService {

  constructor(private httpClient: HttpClient) {
  }

  queryAllLandRegisters(): Observable<LandRegister[]> {
    return this.httpClient.get<LandRegister[]>(url + queryAllLandRegisters);
  }

  createLandRegister(newLandRegister: LandRegister): Observable<FrontendResponse> {
    return this.httpClient.post<FrontendResponse>(url + createLandRegister, newLandRegister, httpOptions)
      .pipe(catchError(() => this.handleError('createLandRegister')));
  }

  createReservationNote(reservationNoteRequest: ReservationNoteRequest): Observable<FrontendResponse> {
    return this.httpClient.post<FrontendResponse>(url + createReservationNote, reservationNoteRequest, httpOptions)
      .pipe(catchError(() => this.handleError('createReservationNote')));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T); // Let the app keep running by returning an empty result.
    };
  }
}
