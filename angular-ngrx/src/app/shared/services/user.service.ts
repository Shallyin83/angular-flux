import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../shared/model/user';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserService {
  private _baseUrl = environment.appApi.baseUrl;
  constructor(private http: Http) { }

  loadUsers(filter): Observable<User[]> {
    if (!filter) {
      return this.http.get(this._baseUrl + 'users').map(res => res.json());
    }
    return this.http.get(this._baseUrl + 'users?id=' + filter).map(res => res.json());
  }

  addUser(user: User): Observable<Object> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._baseUrl + 'users', user, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteUser(user: User): Observable<Object> {
    return this.http.delete(this._baseUrl + 'users' + '/' + user.id)
      .map((res) => user)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
