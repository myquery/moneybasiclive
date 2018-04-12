import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule } from 'angularfire2';

//New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCJBDrlPWI1HbkA3GG6O3RKw4dKJRWA6ho",
  authDomain: "moneybasic-bbb2a.firebaseapp.com",
  databaseURL: "https://moneybasic-bbb2a.firebaseio.com",
  projectId: "moneybasic-bbb2a",
  storageBucket: "moneybasic-bbb2a.appspot.com",
  messagingSenderId: "689478380856"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
