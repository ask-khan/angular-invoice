import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxbmZYFbcfjRqMO1x2UrJtw9r--VCsxTA",
  authDomain: "invoice-project-d6431.firebaseapp.com",
  projectId: "invoice-project-d6431",
  storageBucket: "invoice-project-d6431.appspot.com",
  messagingSenderId: "117718134203",
  appId: "1:117718134203:web:fb3eddf568d043eff5289e",
  measurementId: "G-CRSNKQ3R92"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
     // 3. Initialize
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
