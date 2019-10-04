import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../../models/Pedido.model';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  

  constructor(private http:HttpClient) {

    
  }

  crearUsuario(pedido:Pedido){

    
    let token = localStorage.getItem('token');
    
    const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);

    let url = URL_SERVICE + '/pedido/crear';
    
    return this.http.post( url, pedido,{headers})
      .pipe(
      map( (resp: any) => {
      
       swal('Pedido Creado','','success')
     }));
   
  };
  
 }
