import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


  RegUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const name = target.querySelector('#name').value;

    this.Auth.Reguser(username, password, name).subscribe((data: any) => {

      localStorage.setItem('userToken', data.token.id);
      this.router.navigate(['/dashboard']);

    }, (error: HttpErrorResponse) => {

      console.log('login error');
    });

  }

}
