import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

import { RutasService } from './rutas.service';

@Injectable({
  providedIn: 'root'
})
export class RutasGuard implements  CanActivate {
  
    constructor(public proteger:RutasService,
      public router: Router){}
  
      canActivate() {

        if (this.proteger.estaLogueado() ) {
          console.log( 'PASO EL GUARD');
          return true;
        } else {
          console.log( 'Bloqueado por guard' );
          this.router.navigate(['/login']);
          return false;
        }
  }

}