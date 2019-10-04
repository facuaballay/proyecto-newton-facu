import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../../models/Usuario.model';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  

  constructor(public _usuarioService:UsuarioService,public router:Router) { }

  ngOnInit() {
  }
  loginUsuario(form:NgForm){
    if(!form.valid){
      return;
    }
    
    let usuario= new Usuario(form.value.usuario,null,form.value.password);

   
    
    this._usuarioService.loginUsuario(usuario)
    .subscribe((resp:any) =>{
      swal('Sesion Exitosa','','success')
      
      this.router.navigate(['/mispedidos'])
      
    },(error:any)=>{
      
    
      
      if(error.status === 404){

        swal("Error", 'usuario no encontrado','error');
      }
      if(error.status === 403){
        swal("Error", 'contraseña erronea','error');

      }
      
     

    })
  }
}
