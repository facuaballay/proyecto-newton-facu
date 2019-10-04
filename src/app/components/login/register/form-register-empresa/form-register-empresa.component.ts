import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { Empresa } from '../../../../models/Empresa.model';


@Component({
  selector: 'app-form-register-empresa',
  templateUrl: './form-register-empresa.component.html',
  styleUrls: ['./form-register-empresa.component.scss']
})
export class FormRegisterEmpresaComponent implements OnInit {

  formEmpresa: FormGroup;
  constructor(private empresa:EmpresaService) { }

  ngOnInit() {
    this.formEmpresa = new FormGroup({
      nombre:new FormControl(null , Validators.required),
      apellido:new FormControl(null , Validators.required),
      documento:new FormControl(null , [Validators.required]),
      password:new FormControl(null,Validators.required),
      password2:new FormControl(null,Validators.required),
      empresa:new FormControl(null,Validators.required),
      pais:new FormControl(null,Validators.required),
      ubicacion:new FormControl(null,Validators.required),
      provincia:new FormControl(null,Validators.required),
      condiciones:new FormControl(false)
      
      });
  }
  registrarEmpresa(){
    if(this.formEmpresa.value.password != this.formEmpresa.value.password2){
      swal("error", "Las contraseñas deben ser iguales",'error');
      return;
    } 
  if(this.formEmpresa.invalid){
    return;
    
  }

    if(!this.formEmpresa.value.condiciones){
      swal("Importante", "debe de aceptar las condiciones",'warning');
      return;
    }

    let empresa = new Empresa(
      this.formEmpresa.value.nombre,
      this.formEmpresa.value.apellido,
      this.formEmpresa.value.documento,
      this.formEmpresa.value.empresa,
      this.formEmpresa.value.password,
      this.formEmpresa.value.provincia,
      this.formEmpresa.value.ubicacion,
      this.formEmpresa.value.pais
    )

     this.empresa.crearEmpresa(empresa).subscribe(respuesta=>{

        console.log(respuesta);

     },err=>{
       let mensaje = err.error.error.mensaje;

       swal("Error", `${mensaje}`,'error');
     
      console.log(err);
      
     })
  
  }
  
}
