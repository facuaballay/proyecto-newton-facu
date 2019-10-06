import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/shared/sidebar.service';
import { ChildService } from '../../../services/guards/child.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    empresa;
    encargado;
    usuario;
  constructor(public _sidebar:SidebarService,public Child:ChildService) {

    if(sessionStorage.getItem('usuario')){

      this.usuario =JSON.parse(sessionStorage.getItem('usuario'));
      this.usuario = this.usuario.role;
      
    }
    if(sessionStorage.getItem('empresa')){

      this.empresa =JSON.parse(sessionStorage.getItem('empresa'));
      this.empresa = this.empresa.role;
     
    }
    if(sessionStorage.getItem('encargado')){

      this.encargado =JSON.parse(sessionStorage.getItem('encargado'));
      this.encargado = this.encargado.role;
      
    }
   
    
  }
  

  ngOnInit() {
   
  }
  
  
}
