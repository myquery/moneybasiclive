import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule} from "@angular/http";
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule } from 'angularfire2';

//New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrantComponent } from './registrant/registrant.component';
import { ListRegistrantComponent } from './admin/list-registrant/list-registrant.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

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
    AppComponent,
    RegistrantComponent,
    ListRegistrantComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
