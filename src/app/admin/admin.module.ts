import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin.routing';
import {ListRegistrantComponent} from './list-registrant/list-registrant.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';



@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AdminRoutingModule,
      SlimLoadingBarModule.forRoot()
    
    ],
    declarations: [
        AdminComponent,
        ListRegistrantComponent

      
    ],
    exports: [AdminComponent]
  })
  export class AdminModule { }
  