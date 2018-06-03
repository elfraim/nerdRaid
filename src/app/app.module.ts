import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginbtnComponent } from './header/loginbtn/loginbtn.component';
import { SignupbtnComponent } from './header/signupbtn/signupbtn.component';
import { SecondContentComponent } from './main-content/second-content/second-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContentComponent,
    MainContentComponent,
    LoginbtnComponent,
    SignupbtnComponent,
    SecondContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
