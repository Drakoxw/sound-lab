import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {
  ResponseBase,
  ContactMeRequest,
  ListTagsResponse,
  DataListTags,
} from '@interfaces/index';
import { URL_API_BASE } from '@constants/common';

import { logDev } from '@utils/console';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  private url = URL_API_BASE;

  /**
   * No importar!
   * Metodo para el cathError
   */
  private error(err: HttpErrorResponse) {
    logDev('error http', err);
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return of({ error: true, msg: errorMessage });
  }

  sendEmailContactUs(payload: ContactMeRequest): Observable<{
    error: boolean;
    msg: string;
  }> {
    const res = { error: false, msg: '' };
    return this.http
      .post<ResponseBase>(`${this.url}/mail/contactMe`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          return res;
        }),
        catchError(this.error)
      );
  }

  listTags(): Observable<{
    error: boolean;
    msg: string;
    data?: DataListTags[];
  }> {
    const res = { error: false, msg: '', data: [{ id: 0, name: '' }] };
    return this.http.get<ListTagsResponse>(`${this.url}/tags/list`).pipe(
      map((r) => {
        res.msg = r.message;
        res.data = r.data;
        return res;
      }),
      catchError(this.error)
    );
  }

  createTag(name: string): Observable<{
    error: boolean;
    msg: string;
  }> {
    const res = { error: false, msg: '' };
    const payload = { name };
    return this.http
      .post<ResponseBase>(`${this.url}/tags/create`, payload)
      .pipe(
        map((r) => {
          res.msg = r.message;
          return res;
        }),
        catchError(this.error)
      );
  }
}
