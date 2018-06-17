import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const url = 'https://noblegossip.blackbrands.co';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  postLogin(email, password) {

    return this.http.post(url + '/api/login', {

      email,
      password

    });

  }

  Reguser(username, password, name) {

    return this.http.post(url + '/api/register', {

      username,
      password,
      name

    });

  }

  authUser(id) {

    return this.http.get(url + '/api/getuser/' + id);

  }

  Getprojectrequest() {

    return this.http.get(url + '/api/getrequest');

  }

  Contactus() {

    return this.http.get(url + '/api/getcontact');

  }

  getdetail(id) {

    return this.http.get(url + '/api/getdetail/' + id);

  }

  LoggedInUser() {

    return !!localStorage.getItem('userToken');

  }
  logOutuser() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }


}
