import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  public contactus = [];

  constructor(public Auth: AuthService) { }

  ngOnInit() {

    this.getcontact();

  }


  getcontact() {
    this.Auth.Contactus().subscribe(
      (data: any[]) => {
        this.contactus = data;
      }
    );
  }

}
