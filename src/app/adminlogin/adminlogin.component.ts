import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  login : FormGroup
  username : string
  password : string
  userList : string
  

  constructor(private fb : FormBuilder, private router : Router) {

  this.userList = localStorage.getItem('money-token')
  }

  ngOnInit() {

    this.login = this.fb.group({
      username: ['', Validators.required],
      password : ['', Validators.required]
    })

    
  }

  loginAdmin(value){
    const users = JSON.parse(this.userList)

    console.log(users)
    const{username, password} = users
    if(value.username === username && value.password === password){
      this.router.navigate(['/admin'])
    }else{
      console.log(value)
    }
    

    

  }




}
