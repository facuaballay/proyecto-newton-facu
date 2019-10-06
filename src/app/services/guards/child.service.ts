import { Injectable } from '@angular/core';
import { EmpresaService } from '../empresa/empresa.service';
import { EncargadoService } from '../encargado/encargado.service';


@Injectable({
  providedIn: 'root'
})
export class ChildService {

    token: string;
    
    empresa;
    empresaLista;

  constructor(
               ) {

                    this.cargarStorage();
}  
ngOnInit() {
    
}

cargarStorage() {

    if ( sessionStorage.getItem('empresa')) {
      
      this.empresa = JSON.parse( sessionStorage.getItem('empresa') );
       this.empresaLista= this.empresa.role;
    }
    if ( sessionStorage.getItem('encargado')) {
      
      this.empresa = JSON.parse( sessionStorage.getItem('encargado') );
       this.empresaLista= this.empresa.role;
    }
    

  }

    
}


