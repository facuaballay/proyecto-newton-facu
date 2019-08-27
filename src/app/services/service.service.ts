import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private http:HttpClient) {

    
  }
  
  getTodo(){

    let url = "https://proyectolaravelleonelyo.herokuapp.com/api/todo";
    return this.http.get(url);
  }

}
