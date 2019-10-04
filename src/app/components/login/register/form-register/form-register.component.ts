import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//servicio
import { UsuarioService } from '../../../../services/usuario/usuario.service';
//models
import { Usuario } from '../../../../models/Usuario.model';
//router
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  formUser: FormGroup;
  
  Imagen:File;
  

  constructor(public ServicioUsuario:UsuarioService,public router:Router) { 

  }

  ngOnInit() {
   

  this.formUser = new FormGroup({
    usuario:new FormControl(null , Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null , Validators.required),
    password2:new FormControl(null , Validators.required),
    condiciones:new FormControl(false),
   
    
    });
  }

registrarUsuario(){

    if(this.formUser.value.password != this.formUser.value.password2){
      swal("Importante", "Las contraseñas deben ser iguales",'warning');
      return;
    } 
    if(this.formUser.invalid){
         return;
    }

    if(!this.formUser.value.condiciones){
      swal("Importante", "debe de aceptar las condiciones",'warning');
      return;
    }


    let usuario = new Usuario(
      this.formUser.value.usuario,
      this.formUser.value.email,
      this.formUser.value.password,
      
      );

  this.ServicioUsuario.crearUsuario(usuario).subscribe(respuesta =>{
      
    this.router.navigate(['/login']);

  }, err=>{
    console.log(err);
    
    let mensaje = err.error.error.mensaje;

      swal("Error", `${mensaje}`,'error');
     
     
      
   
    
  });   
 
}

}
