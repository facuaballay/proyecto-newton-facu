import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { RutasService } from './rutas.service';

@Injectable({
  providedIn: 'root'
})
export class RutasGuard implements  CanActivate {
  
    constructor(public proteger:RutasService,
      public router: Router){}
  
      canActivate() {

        if (this.proteger.estaLogueado() ) {
          
          return true;
        } else {
          swal('error','No tenes Autorizacion','error' );
          this.router.navigate(['/login']);
          return false;
        }
  }

}