import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseAuthenicationService } from './../firebase-authenication.service';
import { userLogin, MustMatch } from './../shared/services/user'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	userInfo = new userLogin();
	
	constructor(public firebaseAuthenicationService: FirebaseAuthenicationService, firestore: AngularFirestore) { }

	ngOnInit(): void { }

	signIn() {
		this.firebaseAuthenicationService.SignIn(this.userInfo.email, this.userInfo.password);
		// this.email = "";
		// this.password = "";
	}



}
