import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { NgForm } from '@angular/forms';

import { Empresa } from '../../../models/Empresa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})

export class FormEmpresaComponent implements OnInit {

    public empresas:Empresa;
  constructor(public empresaService:EmpresaService,public router:Router) { }

  ngOnInit() {
  }
  loginEmpresa(form:NgForm){
    
      if(!form.valid){
        return;
      }
     let empresa = new Empresa(null,null,null,null,form.value.password,null,null,null,null,form.value.documento);
  
   

     this.empresaService.loginEmpresa(empresa)
                          .subscribe((resp:any) =>{
                            
                            swal('Sesion Exitosa','','success');
                            
                            this.empresas = resp;
                            this.router.navigateByUrl('/mispedidos');
                          },(error:any)=>{
                           console.log(error);

                           if(error.status === 404){
                             swal('error','Documento Invalido','error');
                           }
                           if(error.status === 403){
                             swal('error','Contraseña erronea','error');
                           }
                          })
  
    
  
  }
}