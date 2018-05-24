import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { respObj } from '../helpers/types';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api/data';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getData(forDate?: Date): Observable<respObj> {

    return this.http
      .post<respObj>(`${this.baseUrl}`, { forDate }, {
        headers: new HttpHeaders().set(
          'Authorization', `Bearer ${this.auth.accessToken}`
        ),

      })
      .pipe(
        catchError(this._handleError)
      );
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return throwError(errorMsg);
  }

}

