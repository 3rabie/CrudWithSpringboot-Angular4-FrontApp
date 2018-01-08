import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Operators } from './operators';

@Injectable()
export class OperatorService {

  constructor(private http: Http) {
  }

  listAll(): Observable<Operators> {
    const apiUrl = 'api/operator';
    return this.http.get(apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findByID(id: number): Observable<Operators> {
    const apiUrl = `/api/operator/`;
    return this.http.get(apiUrl + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  create(operator: Operators): Observable<Operators> {
    const apiUrl = '/api/operator';
    return this.http.post(apiUrl, operator)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteOperatorById(id: number): Observable<void> {
    const apiUrl = `/api/operator/`;
    return this.http.delete(apiUrl + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  updateOperator(id: number, operator: Operators): Observable<Operators> {
    const apiUrl = `/api/operator/`;
    return this.http.put(apiUrl + id, operator)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
