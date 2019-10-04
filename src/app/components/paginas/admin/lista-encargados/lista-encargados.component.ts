import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../../services/empresa/empresa.service';

@Component({
  selector: 'app-lista-encargados',
  templateUrl: './lista-encargados.component.html',
  styleUrls: ['./lista-encargados.component.scss']
})
export class ListaEncargadosComponent implements OnInit {

public todo;

  constructor(public _EmpresaService:EmpresaService) {

    
   }

  ngOnInit() {

    this._EmpresaService.listaEncargados().subscribe(res=>{
     
     this.todo = res;
      console.log(res);
    })
  }

  borrarEncargado(){
   
  }
  
      
 
}
