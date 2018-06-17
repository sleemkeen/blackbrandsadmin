import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public prodata = [];
  public contactus = [];

  public token = localStorage.getItem('userToken');

  constructor(public Auth: AuthService) { }

  ngOnInit() {

    this.getdata();
    this.getcontact();



  }

  getdata() {
    this.Auth.Getprojectrequest().subscribe(
      (data: any[]) => {
        this.prodata = data;
      }
    );
  }
  
  getcontact() {
    this.Auth.Contactus().subscribe(
      (data: any[]) => {
        this.contactus = data;
      }
    );
  }
}
