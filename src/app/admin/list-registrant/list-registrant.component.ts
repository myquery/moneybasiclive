import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-list-registrant',
  templateUrl: './list-registrant.component.html',
  styleUrls: ['./list-registrant.component.css']
})
export class ListRegistrantComponent implements OnInit {
  participant : Observable<any>;
  regUsers : any
  callme  : any
  smsme : any         
  constructor(private afDB : AngularFireDatabase, private router: Router, private loader: SlimLoadingBarService) { 
    //this.callme = ''
  }
  

  ngOnInit() {
    this.loadIndicator()
    //this.callme = []
 
    this.participant = this.afDB.list('/participants').valueChanges()
    this.participant.map(users => users )
    .subscribe((user) => {
      
      this.regUsers = user
      this.endIndicator()
          var i = 0
          //var reg = this.regUsers.length
          for(i = 0; i < this.regUsers.length; i++){

              this.callme = `tel:+234${this.regUsers[i].phone}` 
              //this.smsme = `sms:+234${this.regUsers[i].phone}` 
           }



    })

   
    
  }

  signOut (){
  this.router.navigate(['/'])
   
 }

 loadIndicator(){
  this.loader.start()
}
endIndicator(){
 this.loader.complete() 
}




}
