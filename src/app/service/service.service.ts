import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Service } from './service';

@Injectable()
export class ServiceService {

  constructor(private http: Http) {
  }

  listAll(): Observable<Service[]> {
    const apiUrl = '/api/service';
    return this.http.get(apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findByID(id: number): Observable<Service> {
    const apiUrl = `/api/service/`;
    return this.http.get(apiUrl + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  create(service: Service): Observable<Service> {
    const apiUrl = '/api/service/new';
    return this.http.post(apiUrl, service)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteServiceById(id: number): Observable<void> {
    const apiUrl = `/api/service/${id}`;
    return this.http.delete(apiUrl + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateService(id: number, service: Service): Observable<Service> {
    const apiUrl = `/api/service/${id}`;
    return this.http.put(apiUrl + id, service)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}




