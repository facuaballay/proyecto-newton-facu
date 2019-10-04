import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//imports modulos
import { PaginasModule } from './components/paginas/paginas.module';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { RouterModule } from '@angular/router';
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
import { FormEmpresaComponent } from './components/login/form-empresa/form-empresa.component';
import { FormEncargadoComponent } from './components/login/form-encargado/form-encargado.component';
//pipes
import { NoimagePipe } from './pipes/noimage.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormRegisterEmpresaComponent,
    FormEmpresaComponent,
    FormEncargadoComponent,
    NoimagePipe,
    
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
    DigitOnlyModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
