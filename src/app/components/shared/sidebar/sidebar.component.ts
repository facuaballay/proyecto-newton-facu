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

    if(localStorage.getItem('usuario')){

      this.usuario =JSON.parse(localStorage.getItem('usuario'));
      this.usuario = this.usuario.role
      console.log(this.usuario);
    }
    if(localStorage.getItem('empresa')){

      this.empresa =JSON.parse(localStorage.getItem('empresa'));
      this.empresa = this.empresa.role;
      console.log(this.empresa);
    }
    if(localStorage.getItem('encargado')){

      this.encargado =JSON.parse(localStorage.getItem('encargado'));
      this.encargado = this.encargado.role;
      console.log(this.encargado);
    }
   
    
  }
  

  ngOnInit() {
   
  }
  
}
