import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';



import { MDBBootstrapModule } from 'angular-bootstrap-md';


//navbar
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoimageUserPipe } from '../../pipes/noimageUser.pipe';
import { ImagenService } from '../../services/shared/imagen.service';




@NgModule({
    declarations:
        [ NavbarComponent,  
          SidebarComponent,
          NoimageUserPipe
        ],
        imports: [
              RouterModule,
              CommonModule,
              BrowserModule,
              MDBBootstrapModule.forRoot() 
        ],
    providers: [
        ImagenService
    ],
    exports:[
        NavbarComponent,
        SidebarComponent 
    ]
})
export class SharedModule {}