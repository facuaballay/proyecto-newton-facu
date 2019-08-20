import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//imports modulos
import { SharedModule } from './components/shared/shared.module';
import { PaginasModule } from './components/paginas/paginas.module';
import { AppRoutingModule } from './app-routing.module';
//login componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormRegisterComponent } from './components/login/register/form-register/form-register.component';
import { FormRegisterEmpresaComponent } from './components/login/register/form-register-empresa/form-register-empresa.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormRegisterEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    PaginasModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
