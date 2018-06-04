/* Core */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

/* FIREBASE; */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';


/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginbtnComponent } from './header/loginbtn/loginbtn.component';
import { SignupbtnComponent } from './header/signupbtn/signupbtn.component';
import { SecondContentComponent } from './main-content/second-content/second-content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainLearnComponent } from './main-learn/main-learn.component';
import { HomeComponent } from './home/home.component';
import { LearnFirstContentComponent } from './main-learn/learn-first-content/learn-first-content.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Facebook
  ],
  method: AuthMethods.Popup,
  tos: 'none',
  credentialHelper: CredentialHelper.AccountChooser,
  autoUpgradeAnonymousUsers: true
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContentComponent,
    MainContentComponent,
    LoginbtnComponent,
    SignupbtnComponent,
    SecondContentComponent,
    MainLearnComponent,
    HomeComponent,
    LearnFirstContentComponent,
    FooterComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    HttpModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
