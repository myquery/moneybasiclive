import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {Participant} from './participant'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  moneyForm: FormGroup
  participant: AngularFireList<any>;
  regParticipants : Participant[];

  name = '';
  email = '';
  phone = '';
  bookSeat = false
  


  constructor(public fb: FormBuilder, private afDB : AngularFireDatabase ){}

  ngOnInit(){
   this.moneyForm = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', Validators.required],
    'phone' : ['', Validators.required],
    'bookSeat': ''
  })

  this.participant = this.afDB.list('/participants')
  }

  addParticipant(value){
    this.name = value.name
    this.bookSeat = value.bookSeat

    let pinId = Math.floor(Math.random()*9000000 + 1000000);
    
    this.participant.push({ participant: value, registrationDate: Date.now(), uniqueId : pinId });
    console.log(this.participant)
   
  }

  
}