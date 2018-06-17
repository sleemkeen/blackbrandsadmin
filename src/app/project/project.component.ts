import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  public prodata = [];

  constructor(public Auth: AuthService) { }

  ngOnInit() {

    this.getdata();
  }

  getdata() {
    this.Auth.Getprojectrequest().subscribe(
      (data: any[]) => {
        this.prodata = data;
      }
    );
  }

}
