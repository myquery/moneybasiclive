import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-list-registrant',
  templateUrl: './list-registrant.component.html',
  styleUrls: ['./list-registrant.component.css']
})
export class ListRegistrantComponent implements OnInit {
  participant : Observable<any>;
  regUsers : any
  callme :  string           
  constructor(private afDB : AngularFireDatabase ) { 
     

    
     
  }
  

  ngOnInit() {
    
    this.participant = this.afDB.list('/participants').valueChanges()
    this.participant.switchMap(users => users)
        .subscribe( (users) =>  {
           this.regUsers = users
           this.callme = `tel:+234${this.regUsers.phone}`
             })
   

    
   
    
  }

}
