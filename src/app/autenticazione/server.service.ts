import { Injectable } from '@angular/core';
import { Utente } from './interfaccia/utente';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Supereroi } from '../interfacce/supereroi';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private linkserver = 'http://localhost:3000';
  token = new JwtHelperService();
  authSubject = new BehaviorSubject<Utente | null>(null);
  constructor(private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

  login(obj: Utente) {
    //this.loggedIn = true;
    return this.http.post<Utente>(this.linkserver + '/login', obj).pipe(
      /* tap(ele => console.log(ele)), */
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data));
      })
    );
  }

  signup(obj: Utente) {
    return this.http.post(this.linkserver + '/users', obj);
  }
  restoreUserLogin() {
    const json = localStorage.getItem('isAuthenticated');
    if (json) {
      const user = JSON.parse(json);
      if (this.token.isTokenExpired(user.accessToken)) {
        localStorage.removeItem('isAuthenticated');
        return;
      } else {
        this.authSubject.next(user);
      }
    }
  }

  postEroi(obj: Supereroi) {
    return this.http.post(this.linkserver + '/posts', obj);
  }
  getPostEroi() {
    return this.http.get<Supereroi[]>(this.linkserver + '/posts');
  }
  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  /*   delPostEroi(obj: Supereroi) {
    let index = obj.id;
    console.log(index);
    console.log(this.linkserver + '/posts/' + index);
    this.http.delete(this.linkserver + '/posts/' + index);
  } */

  delPostEroi(obj: Supereroi) {
    let index = obj.id;
    fetch(this.linkserver + '/posts/' + index, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => alert('Eroe Resuscitato'));
  }
}
