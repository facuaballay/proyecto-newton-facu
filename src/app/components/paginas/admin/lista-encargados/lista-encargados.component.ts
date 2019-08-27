import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-lista-encargados',
  templateUrl: './lista-encargados.component.html',
  styleUrls: ['./lista-encargados.component.scss']
})
export class ListaEncargadosComponent implements OnInit {

public todo;

  constructor(public servicio:ServiceService) {

    
   }

  ngOnInit() {
  }
 
  todos(){
    this.servicio.getTodo().subscribe( data =>{
      
      
      this.todo = data.respuesta;

      console.log(this.todo);
    })
  }
}
