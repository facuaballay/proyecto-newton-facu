import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';



const routes: Routes = [

  { path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent },
   { path: '', component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
