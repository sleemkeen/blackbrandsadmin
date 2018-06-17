import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AuthService } from '../auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any;
  public detaildata;

  constructor(private route: ActivatedRoute, public Auth: AuthService) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
     this.id = params['id'];
   });
    this.getdetail();
  }

  getdetail() {

    this.Auth.getdetail(this.id).subscribe(
      (data: any[]) => {
        this.detaildata = data;
      }
    );



  }

}
