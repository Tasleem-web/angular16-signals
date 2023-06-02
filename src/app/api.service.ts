import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(map((res) => res));
  }

  public getById(id: any): Observable<any> {
    return this.http
      .get(`https://fakestoreapi.com/products/${id}`)
      .pipe(map((res) => res));
  }
}
