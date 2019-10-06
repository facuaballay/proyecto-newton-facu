import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
//url
import { URL_SERVICE } from '../../config/config';
import { Encargado } from '../../models/Encargado.model';
//model


@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  

  constructor(private http:HttpClient) {

    
  }
  
  crearEncargado(encargado:Encargado){

    let url = URL_SERVICE + '/encargado/crear';

    let token = localStorage.getItem('token');
    
    const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);

    return this.http.post( url,encargado,{headers})
      .pipe(
      map( (resp: any) => {
         
        swal('Encargado Creado',encargado.usuario,'success');
       
        console.log(resp);
        
     }));
  

   
  }

  loginEncargado(encargado:Encargado){
    
    let url= URL_SERVICE + '/login';
    return this.http.post(url,encargado)
    .pipe(
      map( (resp: any) => {

      console.log(resp);

       localStorage.setItem('token',resp.token);

       sessionStorage.setItem('encargado',JSON.stringify(resp.respuesta));
    }));   
  }
  pedidosEncargado(){
      

    let id = JSON.parse( sessionStorage.getItem('encargado'));

    let url = URL_SERVICE + `/encargado/${id.id}`;

    let token = localStorage.getItem('token');

   

     const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);
    
 

    return this.http.get(url,{headers}).pipe(map(res=> res['respuesta'].pedidos) )
  }        

  
}
