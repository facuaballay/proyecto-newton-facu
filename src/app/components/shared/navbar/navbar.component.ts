import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public infoLista;
    public images;
     public imglista;

  constructor(public router:Router) { }

  ngOnInit() {
    
    
    if(sessionStorage.getItem('empresa')){

      let info = sessionStorage.getItem('empresa');
  
      this.infoLista =JSON.parse(info);
      
      if(this.infoLista.img === null){
        
        this.images = 'assets/images/users/default.png';
       }else{
        this.images = `http://localhost/backend/public/api/imagen/${this.infoLista.img}`;
       }
      
    }
    if(sessionStorage.getItem('encargado')  ){

      let info = sessionStorage.getItem('encargado');
  
      this.infoLista =JSON.parse(info);

      if(this.infoLista.img === null){
        
        this.images = 'assets/images/users/default.png';
       }else{
        this.images = `http://localhost/backend/public/api/imagen/${this.infoLista.img}`;
       }
      
    }
    if(sessionStorage.getItem('usuario')){

      let info = sessionStorage.getItem('usuario');
  
      this.infoLista =JSON.parse(info);
      
      if(this.infoLista.img === null){
        
        this.images = 'assets/images/users/default.png';
       }else{
        this.images = `http://localhost/backend/public/api/imagen/${this.infoLista.img}`;
       }
      
      

        

       
      
    }



    // console.log(this.infoLista);
  }

  
  logout(){


    localStorage.clear();
    sessionStorage.clear();
    
    
  }
  
  
}
