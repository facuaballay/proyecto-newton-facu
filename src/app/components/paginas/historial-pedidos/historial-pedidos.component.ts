import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { EncargadoService } from '../../../services/encargado/encargado.service';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.scss']
})
export class HistorialPedidosComponent implements OnInit {

public historialEmpresa = [];


  constructor(public _EmpresaService:EmpresaService,
    public _encargadoService:EncargadoService) { }

  ngOnInit() {

    if(localStorage.getItem('empresa')){
      this._EmpresaService.historialPedidosEncargados().subscribe(res=>{
       
        res.forEach(elemento => {
          if(elemento.length > 0){
            elemento.forEach(elemento2 => {
                
                this.historialEmpresa.push(elemento2);
            });
          }
          
        });
        console.log(this.historialEmpresa);
        
       })
    };
    if(localStorage.getItem('encargado')){
     
       
      this._encargadoService.pedidosEncargado().subscribe(res =>{
        this.historialEmpresa = res;

      })
    };

  }

}
