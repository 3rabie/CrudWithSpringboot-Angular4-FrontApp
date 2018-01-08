import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  listAll(): Observable<Product[]> {
    const apiUrl = 'api/product';
    return this.http.get(apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findByID(id: number): Observable<Product> {
    const apiUrl = `api/product/`;
    return this.http.get(apiUrl + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  create(product: Product): Observable<Product> {
    const apiUrl = 'api/product';
    return this.http.post(apiUrl, product)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteProductById(id: number): Observable<number> {
    const apiUrl = `api/product/`;
    return this.http.delete(apiUrl + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }



  updateProduct(id: number, product: Product): Observable<Product> {
    const apiUrl = `api/product/`;
    return this.http.put(apiUrl + id, product)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
