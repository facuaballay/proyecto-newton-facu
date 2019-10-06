import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';

import { Encargado } from '../../../models/Encargado.model';
import { EncargadoService } from '../../../services/encargado/encargado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-encargado',
  templateUrl: './form-encargado.component.html',
  styleUrls: ['./form-encargado.component.scss']
})
export class FormEncargadoComponent implements OnInit {

  public encargados : Encargado;
  
  constructor(public _encargadoService:EncargadoService,public router:Router) { 


  }

  ngOnInit() {
  }
  loginEncargado(form:NgForm){
    if(!form.valid){
      return;
    }
    let encargado = new Encargado(null,null,null,form.value.usuario,form.value.password);
    
    
    
    this._encargadoService.loginEncargado(encargado)
    .subscribe((resp:any) =>{
      
      swal('Sesion Exitosa','','success')
      
      this.encargados = resp;

      this.router.navigateByUrl('/mispedidos');


    
      },error=>{
      
      if(error.status === 404){
        swal('error','Encargado no encontrado','error');
      }
      if(error.status === 403){
        swal('error','contraseña erronea','error');
      }
    });
  }
}
