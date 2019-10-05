import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, filter } from 'rxjs/operators';
//url
import { URL_SERVICE } from '../../config/config';
//model
import { Empresa } from '../../models/Empresa.model';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  

  constructor(private http:HttpClient) {

    
  }
  
  crearEmpresa(empresa:Empresa){

    let url = URL_SERVICE + '/empresa/crear';
    
    return this.http.post( url, empresa)
      .pipe(
      map( (resp: any) => {
         swal('Empresa Creada',empresa.nombreEmpresa,'success');
       
        return resp.nombre;
     }));
   
  };

  loginEmpresa(empresa:Empresa){
   

    let url= URL_SERVICE + '/login';
    return this.http.post(url,empresa)
                    .pipe(
                      map( (resp: any) => {

                      

                      localStorage.setItem('token',resp.token);

                      localStorage.setItem('empresa',JSON.stringify(resp.respuesta));
      
                      
                }));              
          };
  
  listaEncargados(){
    let id = JSON.parse( localStorage.getItem('empresa'));
            
    let url = URL_SERVICE + `/empresa/encargados/${id.id}`;

    let token = localStorage.getItem('token');

   

     const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);
    
 
     return this.http.get(url,{headers}).pipe(map(res=> res['respuesta'].encargado_sin_pedido) )
   
  }
  
  historialPedidosEncargados(){
    
    let id = JSON.parse( localStorage.getItem('empresa'));
            
    let url = URL_SERVICE + `/empresa/historial/${id.id}`;

    let token = localStorage.getItem('token');

   

     const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);
    
 
     return this.http.get(url,{headers}).pipe(map(res=> res['respuesta']) )
   
  }
  
  pedidosEmpresa(){
      

    let id = JSON.parse( localStorage.getItem('empresa'));

    let url = URL_SERVICE + `/empresa/${id.id}`;

    let token = localStorage.getItem('token');

   

     const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);
    
 

    return this.http.get(url,{headers}).pipe(map(res=> res['respuesta'].pedidos) )
  }
  
 



}
