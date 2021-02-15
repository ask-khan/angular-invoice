import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from './../shared/services/user'
import { FirebaseAuthenicationService } from './../firebase-authenication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userInfo:User = {
    uid: '',
    email: '',
    name: '',
    password: ''
  }
  
  @Input() isSignUp: boolean; // decorate the property with @Input()
  @Output() openSignIn = new EventEmitter<{ feature:String ,showLogin:boolean}>();
  

  constructor() {}

  ngOnInit(): void {}

  showLoginForm( showLogin:boolean ) {
    this.openSignIn.emit({ feature:'SignUp', showLogin:showLogin });
  }

  signUp() {
    console.log( this.userInfo );
    
  }

}
