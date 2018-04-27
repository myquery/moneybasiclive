import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Participant} from '../participant'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


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
  


  constructor(public fb: FormBuilder, private afDB : AngularFireDatabase, private loader: SlimLoadingBarService){
   
  }

  ngOnInit(){
    this.loadIndicator()
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
      <div style="backgroud-color: #f9f9f9; padding: 10px; margin: 10px; font-size: 12px; border: 1px solid #ccc; border-radius: 5px">
      <h3>From: Rosaline Obianuju. <noreply@moneybasic.net.com></h3>
      <h2>Your Reservation Code is: ${pinId}</h2>
      <hr>
       <h3>Welcome onboard!</h3>
       <p>
       You made the right choice to become a pro trader on our platform. 
       Here you earn while you are learning to become a pro trader, 
       you also acquires skills that pays you for rest of life
       </p>
      <br>
          
      <h5>TO PARTICIPATE IN ANY MONEY BASIC SIMINAR/WORKSHOP</h5>
      <span>Make a 20% Payment of #100,000.00 to get a seat Reservation</span><br>
      <span>Make Payment to: <strong>Astan Technologies Nigeria Limited </strong> </span>
      <ul>
        <li>Account Number: 0114279739</li>
        <li>Account Bank: GTBank</li>
        <li>Swift Code: GTBINGLA</li>
      </ul>
      </div>
    `;
    let formRequest = { name, email, phone, bookSeat, date, pinId, html };
    this.participant.push(formRequest);
    // console.log(this.participant)
   
  }


 loadIndicator(){
  this.loader.start()
}
endIndicator(){
 this.loader.complete() 
}

  
}

