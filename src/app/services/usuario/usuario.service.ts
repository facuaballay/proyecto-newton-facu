import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
//url
import { URL_SERVICE } from '../../config/config';
import { Usuario } from '../../models/Usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  

  constructor(private http:HttpClient) {

    
  }
  
  crearUsuario(usuario:Usuario){

    let url = URL_SERVICE + '/usuario/crear';
    
    return this.http.post( url, usuario)
      .pipe(
      map( (resp: any) => {
         swal('Usuario Creado',usuario.usuario,'success');
       
        return resp.usuario;
     }));
   
  };
  loginUsuario(usuario:Usuario){
   

    let url= URL_SERVICE + '/login';
    return this.http.post(url,usuario)
                    .pipe(
                      map( (resp: any) => {

                      

                      localStorage.setItem('token',resp.token);

                      sessionStorage.setItem('usuario',JSON.stringify(resp.respuesta));
      
                      
                }));              
          };
     
          pedidosUsuarios(){
            

            let id = JSON.parse( sessionStorage.getItem('usuario'));

            let url = URL_SERVICE + `/usuario/${id.id}`;

            let token = localStorage.getItem('token');

           

             const headers = new HttpHeaders().append('Content-Type', 'application/json').append('token', token);
            
         

            return this.http.get(url,{headers}).pipe(map(res=> res['respuesta'].pedidos) )
          }

}
