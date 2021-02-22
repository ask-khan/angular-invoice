import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User, MustMatch } from './../shared/services/user'
import { FirebaseAuthenicationService } from './../firebase-authenication.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userInfo = new User();
  
  constructor( public firebaseAuthenicationService:FirebaseAuthenicationService, firestore: AngularFirestore ) {}

  ngOnInit(): void {}

  signUp() {
    console.log( this.userInfo );
    this.firebaseAuthenicationService.SignUp( this.userInfo.email, this.userInfo.password );
    // console.log( this.userInfo );  
  }

}
