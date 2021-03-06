import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
   getTasks() {
     return this._http.get('/all');
   }
   getTasksById(id: string) {
     return this._http.get('/:id');
   }
}
