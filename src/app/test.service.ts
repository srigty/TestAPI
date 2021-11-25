import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly url="https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }

  getTodos():Observable<any>{

      return this.http.get<any>(this.url)
  }
}
