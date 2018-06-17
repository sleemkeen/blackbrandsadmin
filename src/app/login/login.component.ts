import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }



  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.postLogin(email, password).subscribe((data: any) => {
     if (data === 'Incorrect') {


       this.router.navigate(['/login']);

       this.toastr.error('Incorrect Username and Password combination!', 'Notification!');

      } else {


       localStorage.setItem('userToken', data);
       this.router.navigate(['/dashboard']);

      }

    }, (error: HttpErrorResponse) => {
         this.toastr.error('Whoops something went wrong', 'Notification!');
    });

  }

}
