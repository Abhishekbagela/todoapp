import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Register } from 'src/classes/register';
import { Endpoint } from 'src/util/app-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username, password): Observable<any> {
    return this.http.post(
      Endpoint.AUTH_BASE_URL + '/' + Endpoint.LOGIN,
      username,
      password
    );
  }

  register(user: Register): Observable<any> {
    return this.http.post(
      //  Endpoint.AUTH_BASE_URL + '/' + Endpoint.REGISTER,
      'http://localhost:8080/todoapp/api/auth/register',
      user
    );
  }
}
