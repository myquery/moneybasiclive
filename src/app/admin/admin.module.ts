import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin.routing';
import {ListRegistrantComponent} from './list-registrant/list-registrant.component'



@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AdminRoutingModule
    
    ],
    declarations: [
        AdminComponent,
        ListRegistrantComponent

      
    ],
    exports: [AdminComponent]
  })
  export class AdminModule { }
  