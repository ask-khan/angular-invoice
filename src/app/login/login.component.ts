import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() isLogin: boolean; // decorate the property with @Input()
  @Output() openSignUp = new EventEmitter<{ feature:String ,showSign:boolean}>();

  constructor() { }

  ngOnInit(): void {}

  showSignUpForm( showSignUp:boolean ) {
    this.openSignUp.emit( { feature:'Login', showSign:showSignUp } );
  }

}
