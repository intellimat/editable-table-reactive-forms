import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userUrl, apiBaseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiBaseUrl + userUrl);
  }

  postUser(userId: number, body: User): Observable<User> {
    return this.http.post<User>(apiBaseUrl + userUrl + '/' + userId, body);
  }

  deleteUser(userId: number): Observable<{}> {
    return this.http.delete(apiBaseUrl + userUrl + '/' + userId);
  }

  patchUser(userId: number, body: Partial<User>): Observable<User> {
    return this.http.patch<User>(apiBaseUrl + userUrl + '/' + userId, body);
  }

  putUser(userId: number, body: Partial<User>): Observable<Partial<User>> {
    return this.http.put<Partial<User>>(
      apiBaseUrl + userUrl + '/' + userId,
      body
    );
  }
}
