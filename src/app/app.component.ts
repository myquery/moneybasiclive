import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  
  constructor(){}
  ngOnInit() {
    this.setUser();
   
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

    
}
