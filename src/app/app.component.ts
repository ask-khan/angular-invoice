import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenicationService } from './firebase-authenication.service';
import { Router,NavigationEnd  } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isLogin: boolean;
  isShow: boolean = true;
  route: string;

  constructor( public firebaseAuthenicationService: FirebaseAuthenicationService, private router: Router, location: Location ) { 
    console.log('constructor');
  }

  // implement OnInit's `ngOnInit` method.
  ngOnInit() {
    this.isLogin = false;    
    console.log( this.firebaseAuthenicationService.isLoggedIn )
    if ( this.firebaseAuthenicationService.isLoggedIn != true ) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
    
  }
}
