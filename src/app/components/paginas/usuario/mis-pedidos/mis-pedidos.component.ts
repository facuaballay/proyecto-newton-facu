import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { EncargadoService } from '../../../../services/encargado/encargado.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
 
})
export class MisPedidosComponent implements OnInit {

  public pedidos;
  
  constructor(public _usuarioService:UsuarioService,public _EmpresaService:EmpresaService,public _EncargadoService:EncargadoService) { 

  

  }

  ngOnInit() {

    
    if(localStorage.getItem('encargado')){
      this._EncargadoService.pedidosEncargado().subscribe(res=>{
        
       this.pedidos = res;
       
       console.log("hola",this.pedidos);
     });

    
    
    if(localStorage.getItem('empresa')){
      this._EmpresaService.pedidosEmpresa().subscribe(res=>{
        
       this.pedidos = res;
       
       console.log("hola",this.pedidos);
     });

    }
 
    if(localStorage.getItem('usuario')){
      this._usuarioService.pedidosUsuarios().subscribe(res=>{
        
       this.pedidos = res;
       
       console.log("hola",this.pedidos);
     });

    }

    

  }
  
  
  
}}
