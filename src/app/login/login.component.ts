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
	
	constructor(public firebaseAuthenicationService: FirebaseAuthenicationService, firestore: AngularFirestore) { }

	ngOnInit(): void { }

	signIn() {
		this.firebaseAuthenicationService.SignIn(this.email, this.password);
		this.email = "";
		this.password = "";
	}



}
