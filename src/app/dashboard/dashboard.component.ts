import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenicationService } from './../firebase-authenication.service';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public firebaseAuthenicationService: FirebaseAuthenicationService, private router: Router  ) { }

  ngOnInit(): void {

    if ( this.firebaseAuthenicationService.isLoggedIn != true ) {
      this.router = undefined
    } 
  }

  signOut():void {
    this.firebaseAuthenicationService.SignOut();
  }

}
