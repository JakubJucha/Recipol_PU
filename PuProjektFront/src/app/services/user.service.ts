import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5266';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Auth/register`, userData);
  }

  login(credentials: any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/Auth/login`, credentials);
  }

  getDecodedToken(token: string): any {
    try {
       return jwtDecode(token);
    } catch(error) {
      console.error('Błąd podczas dekodowania tokena: ', error);
      return null;
    }
  }

  getUserId(): number | null {
    const token = localStorage.getItem('token');
    let userId: number;
    if (token) {
      const tokenPayload = this.getDecodedToken(token);
      userId = tokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      return userId;
    }
    return null;
  }


}
