import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movi } from './movi';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  constructor(private http: HttpClient) { }
  getmovie(movieid: number): Observable<Array<Movi>>{
    return this.http.get<Array<Movi>>('https://638492184ce192ac605bc39a.mockapi.io/Movie/' + movieid);
  }
}