import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isLogin: boolean;

  constructor() { }

  // implement OnInit's `ngOnInit` method.
  ngOnInit() {
    this.isLogin = false;
  }

  showLoginAndSignUp( featureContent ) {
    if ( featureContent.feature == 'Login' ) {
      this.isLogin = true;
    } else if ( featureContent.feature =='SignUp' ) {
      this.isLogin = false;
    }
  }

}
