import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenService } from '../../../services/shared/imagen.service';
import { ChildService } from '../../../services/guards/child.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public infoLista;

  constructor(public router:Router, public _imagen: ImagenService ,public s:ChildService) { }

  ngOnInit() {
    
    
    if(localStorage.getItem('empresa')){

      let info = localStorage.getItem('empresa');
  
      this.infoLista =JSON.parse(info);
    }
    if(localStorage.getItem('encargado')){

      let info = localStorage.getItem('encargado');
  
      this.infoLista =JSON.parse(info);
    }
    if(localStorage.getItem('usuario')){

      let info = localStorage.getItem('usuario');
  
      this.infoLista =JSON.parse(info);
      // this.infoLista.img = this.infoLista.img != null ? this._imagen.getImagen(this.infoLista.img) : null;
      console.log(this.infoLista.img);

      
    }



    // console.log(this.infoLista);
  }

  logout(){
    localStorage.clear();

    this.router.navigate(['/login']);
    
  }
  
  
}
