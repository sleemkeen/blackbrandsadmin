import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const url = 'https://blackbrands.co';
const _headers = new HttpHeaders();
const headers = _headers.append('Content-Type', 'application/json');


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  postLogin(email, password) {

    return this.http.post(url + '/api/login', {

      email,
      password

    }, { headers: headers });

  }

  Reguser(username, password, name) {

    return this.http.post(url + '/api/register', {

      username,
      password,
      name

    }, { headers: headers });

  }

  authUser(id) {

    return this.http.get(url + '/api/getuser/' + id, { headers: headers });

  }

  Getprojectrequest() {

    return this.http.get(url + '/api/getrequest', { headers: headers });

  }

  Contactus() {

    return this.http.get(url + '/api/getcontact', { headers: headers });

  }

  getdetail(id) {

    return this.http.get(url + '/api/getdetail/' + id, { headers: headers });

  }

  LoggedInUser() {

    return !!localStorage.getItem('userToken');

  }
  logOutuser() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }


}
