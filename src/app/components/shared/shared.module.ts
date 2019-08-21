import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";


import { MDBBootstrapModule } from 'angular-bootstrap-md';


//navbar
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
    declarations:
        [ NavbarComponent,  
          SidebarComponent ],
          imports: [
              CommonModule,
              BrowserModule,
              MDBBootstrapModule.forRoot() 
        ],
    providers: [],
    exports:[
        NavbarComponent,
        SidebarComponent 
    ]
})
export class SharedModule {}