import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public userId;

  constructor(private routes: Router, private activatedRoute : ActivatedRoute) {
    console.log("Router",this.routes);
    console.log("Activated Route ",this.activatedRoute);
    this.userId = this.activatedRoute.snapshot.params['id']
   }

  ngOnInit() {
    console.log("Current user id ",this.userId);

  }

}

