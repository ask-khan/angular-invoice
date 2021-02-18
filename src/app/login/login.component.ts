import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseAuthenicationService } from './../firebase-authenication.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	email: string;
	password: string;
	@Input() isLogin: boolean; // decorate the property with @Input()
	@Output() openSignUp = new EventEmitter<{ feature: String, showSign: boolean }>();

	constructor(public firebaseAuthenicationService: FirebaseAuthenicationService, firestore: AngularFirestore) { }

	ngOnInit(): void { }

	showSignUpForm(showSignUp: boolean) {
		this.openSignUp.emit({ feature: 'Login', showSign: showSignUp });
	}

	signIn() {
		this.firebaseAuthenicationService.SignIn(this.email, this.password);
		this.email = "";
		this.password = "";
	}



}
