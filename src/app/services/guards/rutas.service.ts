import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { EmpresaService } from '../empresa/empresa.service';
import { EncargadoService } from '../encargado/encargado.service';


@Injectable({
  providedIn: 'root'
})
export class RutasService {

    token: string;
    usuario;

  constructor(public _UsuarioService:UsuarioService,
            public _EmpresaService:EmpresaService,
            public _EncargadoService:EncargadoService    ) {
                this.cargarStorage();

    
  }
  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
     
    } 
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('empresa') );
      
    } 
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('encargado') );
    
    } 
 
  }
}  