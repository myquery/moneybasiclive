import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './admin.component'

import {ListRegistrantComponent} from './list-registrant/list-registrant.component'


const rootRoutes : Routes = [
    {path: 'admin', 
     component: AdminComponent,
     children: [
        {
            path: '',
            redirectTo: 'listregistrant',
            pathMatch: 'full'
          },
          {
            path: 'listregistrant',
            component: ListRegistrantComponent
          }
         
          
     ]

},

]

@NgModule({
    imports: [
      RouterModule.forChild(rootRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AdminRoutingModule { }