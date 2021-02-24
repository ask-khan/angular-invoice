import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { User } from './shared/services/user'

@Injectable({
	providedIn: 'root'
})

export class FirebaseAuthenicationService {
	userData: any; // Save logged in user data

	constructor(
		public afs: AngularFirestore,
		public router: Router,
		public afAuth: AngularFireAuth
	) {
		/* Saving user data in localstorage when 
	logged in and setting up null when logged out */
		this.afAuth.authState.subscribe(user => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user'));
			} else {
				localStorage.setItem('user', null);
				JSON.parse(localStorage.getItem('user'));
			}
		})
	}

	// Sign in with email/password
	SignIn(email, password) {
		return this.afAuth.signInWithEmailAndPassword(email, password)
			.then((result) => {
				this.SetUserData(result.user);
				this.router.navigate(['dashboard']);
			}).catch((error) => {
				window.alert(error.message)
			})
	}

	SetUserData(user) {
		const userRef = this.afs.collection('users').doc(user.uid);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			name: user.displayName,
			password: null
		}
		
		return userRef.set(userData, {
			merge: true
		});
	}

	// Sign out 
	SignOut() {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem('user');
			this.router.navigate(['/']);
		})
	}

	// Returns true when user is looged in and email is verified
	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return (user !== null) ? true : false;
	}

	// Sign up with email/password
	SignUp(email, password) {
		return this.afAuth.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				/* Call the SendVerificaitonMail() function when new user sign 
				up and returns promise */
				this.SendVerificationMail();
				this.SetUserData(result.user);
			}).catch((error) => {
				window.alert(error.message)
			})
	}

	// Send email verfificaiton when new user sign up
	async SendVerificationMail() {
		return (await this.afAuth.currentUser).sendEmailVerification()
			.then(() => {
				this.router.navigate(['verify-email-address']);
			})
	}
}
