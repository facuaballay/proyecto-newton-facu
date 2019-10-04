import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.scss']
})
export class HistorialPedidosComponent implements OnInit {

public historialEmpresa;


  constructor(public _EmpresaService:EmpresaService) { }

  ngOnInit() {
    this._EmpresaService.historialPedidosEncargados().subscribe(res=>{
     
      
  
       
     })
  }

}
