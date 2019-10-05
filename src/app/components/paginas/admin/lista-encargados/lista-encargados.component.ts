import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../../../config/config';

@Component({
  selector: 'app-lista-encargados',
  templateUrl: './lista-encargados.component.html',
  styleUrls: ['./lista-encargados.component.scss']
})
export class ListaEncargadosComponent implements OnInit {

public todo;
public borrarencargado;
  constructor(public _EmpresaService:EmpresaService,public http:HttpClient) {

    
   }

  ngOnInit() {

   this._EmpresaService.listaEncargados().subscribe(res=>{
       
       this.todo = res;
     
        console.log(this.todo['id']);
      })


  }

  
    
  
  
  
      
 
}
