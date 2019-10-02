import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//imports modulos
import { PaginasModule } from './components/paginas/paginas.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './components/shared/shared.module';

//login componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormRegisterComponent } from './components/login/register/form-register/form-register.component';
import { FormRegisterEmpresaComponent } from './components/login/register/form-register-empresa/form-register-empresa.component';
import { AppComponent } from './app.component';
import { OlvidepassComponent } from './components/login/olvidepass/olvidepass.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormRegisterEmpresaComponent,
    OlvidepassComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    PaginasModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
