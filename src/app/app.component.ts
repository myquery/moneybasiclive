import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
 
  
  constructor(private loader : SlimLoadingBarService){}
  ngOnInit() {
    this.setUser();
    this.endIndicator()
   
  }

  ngAfterViewInit(){
    this.loadIndicator()
  }
  
  setUser(){
   let userList = [{
        username: 'stanarua@aol.com',
        password: 'nonstop18'
      },
      {
        username: 'reoebun@gmail.com',
        password: 'girlonfire18'
      }   
  
    ]
    for (let i = 0; i< userList.length; i++){
     
      localStorage.setItem('money-token', JSON.stringify({ username: userList[i].username, password : userList[i]. password }));
    }
    
  }


  loadIndicator(){
    this.loader.start()
  }
  endIndicator(){
   this.loader.complete() 
  }

   navigationInterceptor(event): void {
    if (event instanceof NavigationStart) {
      this.loadIndicator();
    }
    if (event instanceof NavigationEnd) {
      this.endIndicator();    }
    if (event instanceof NavigationCancel) {
      this.endIndicator();
    }
    if (event instanceof NavigationError) {
      this.endIndicator();
    }
  }

    
}
