import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { DataLogin, ErrorsResponse, LoginResponse } from '@interfaces/responses';
import { LocalstorageService } from '@services/localstorage.service';
import { LoginRequest } from '@interfaces/index';
import { URL_API_BASE } from '@constants/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // readonly
  admin = signal(false);

  private http = inject(HttpClient)
  private localStorage = inject(LocalstorageService)
  private url = URL_API_BASE;

  private sesion!:DataLogin;

  getSession(): DataLogin|null {
    return this.sesion || null;
  }

  /**
   * No importar!
   * Metodo para el cathError
   */
  private error(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      err.error as unknown as ErrorsResponse
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
      if (err.error.errors) {
        errorMessage = err.error.errors[0].detail;
      }
    }
    return of({ error: true, msg: errorMessage });
  }

  login(payload: LoginRequest): Observable<{
    error: boolean;
    msg: string
  }> {
    const res = { error: false, msg: '' };
    return this.http.post<LoginResponse>(`${this.url}/auth/login`, payload)
      .pipe(
        map((r) => {
          this.localStorage.setToken(r.data.token)
          res.msg = r.message;
          this.sesion = r.data;
          if (this.sesion.rol === 'SuperAdmin') { this.admin.set(true); }
          return res;
        }),
        catchError(this.error)
      );
  }

}
