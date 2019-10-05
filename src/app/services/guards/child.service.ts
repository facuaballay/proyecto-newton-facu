import { Injectable } from '@angular/core';
import { EmpresaService } from '../empresa/empresa.service';
import { EncargadoService } from '../encargado/encargado.service';


@Injectable({
  providedIn: 'root'
})
export class ChildService {

    token: string;
    encargado;
    encargadolisto;
    empresa;
    empresaLista;

  constructor(
            public _EmpresaService:EmpresaService,
            public _EncargadoService:EncargadoService    ) {

                    this.cargarStorage();
}  
ngOnInit() {
    
}

cargarStorage() {

    if ( localStorage.getItem('empresa')) {
      
      this.empresa = JSON.parse( localStorage.getItem('empresa') );
       this.empresaLista= this.empresa.role
    }
    if ( localStorage.getItem('encargado')) {
      
        this.encargado = JSON.parse( localStorage.getItem('encargado') );
        this.encargadolisto= this.encargado.role

      }

  }

    
}


