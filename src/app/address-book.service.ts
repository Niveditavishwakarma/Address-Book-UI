import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AddressBookService {
  private apiUrl = 'https://your-api-url.com/persons'; 

  constructor(private http: HttpClient) {}

  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}