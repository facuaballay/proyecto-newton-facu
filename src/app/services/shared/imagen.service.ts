import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(public http: HttpClient) { 
  
  }

  getImagen(img){
    return this.http.get( `${URL_SERVICE}/imagen/${img}`).subscribe(imagen=>imagen);
  }
 



}
