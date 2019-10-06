import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { ChildService } from './child.service';

@Injectable({
  providedIn: 'root'
})
export class RoleEmpresaGuard implements CanActivate {

    constructor(
      public _ChildService:ChildService,public router:Router
    ) { }
  
    canActivate() {
      if(this._ChildService.empresaLista === 'empresa'){
        console.log(this._ChildService.empresaLista);
        return true;
      }else{
        swal('error','No tienes Autorizacion','error');
        this.router.navigate(['/mispedidos'])
        return false;
      }
      

        
      }
  
    }


