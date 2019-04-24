import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITodo } from '../../entity/ITodo';
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]> {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<ITodo[]>(baseUrl)
  }
}
