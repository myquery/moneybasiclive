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
  callme           
  constructor(private afDB : AngularFireDatabase ) { 
    //this.callme = ''
  }
  

  ngOnInit() {

    //this.callme = []
 
    this.participant = this.afDB.list('/participants').valueChanges()
    this.participant.map(users => users )
    .subscribe((user) => {
      this.regUsers = user
     var i =0
     for (i = 0; i < this.regUsers.length; i++) {
       (function(j){
         this.callme = `tel:+234${this.regUsers[j].phone}` 
       }).bind(this, i)

        return this.callme;
          }
    })

   
    
  }

  showNum (j){
    let x = j
    return function(){
     return this.callme = `tel:+234${this.regUsers[x].phone}` 
    }
   
   
 }


//  getNumber(num){
//       (function(){
//      this.callme = `tel:+234${this.regUsers[num].phone}`
//       }).bind(this)
       
      
//     }

// getNumId(){

//   for (var i = 0; i < this.regUsers.length; i++) {
//     this.getNumber(i)
         
//     }

// }


}
