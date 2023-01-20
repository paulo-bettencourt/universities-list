import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {University} from "../interfaces/university.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getUniversity(university: string): Observable<University> {
    return this.http.get<University>(`http://universities.hipolabs.com/search?country=${university}`);
  }

  getCountries() {
    return this.http.get('https://restcountries.com/v3.1/all')
  }
}
