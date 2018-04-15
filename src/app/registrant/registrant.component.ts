import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Participant} from '../participant'


@Component({
  selector: 'app-registrant',
  templateUrl: './registrant.component.html',
  styleUrls: ['./registrant.component.css']
})



export class RegistrantComponent  implements OnInit {
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
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone : ['', Validators.required],
      bookSeat: ''
  })

  this.participant = this.afDB.list('/participants')
  }

  addParticipant(value){
    this.name = value.name
    this.bookSeat = value.bookSeat

    const {name, email, phone, bookSeat} = value;
    const date = Date();
    const pinId = Math.floor(Math.random()*9000000 + 1000000);

     const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Reservatiion Code: ${pinId}</div>
      <div>Phone Number: ${phone}</div>
    `;
    let formRequest = { name, email, phone, bookSeat, date, pinId, html };
    this.participant.push(formRequest);
    // console.log(this.participant)
   
  }

  
}

