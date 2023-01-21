import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {University} from "../interfaces/university.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Referrer-Policy', 'no-referrer');
  }

  getUniversity(university: string): Observable<University> {
    return this.http.get<University>(`https://blushing-jacket-foal.cyclic.app/${university}`);
  }

  getCountries() {
    return this.http.get('https://blushing-jacket-foal.cyclic.app/countries/api')
  }
}
