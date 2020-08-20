import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  public _products;

  public getProducts(): void {
    return this. _products;
  }

  public getTodos(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  public getProductsFromDb(): Observable<any> {
    return this._http.get('./assets/json/data.json');
  }
}
