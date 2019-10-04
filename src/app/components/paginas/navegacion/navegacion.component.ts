import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { SidebarService } from '../../../services/shared/sidebar.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  titulo:any;

  constructor(private router:Router,private title : Title,private meta :Meta,public _sidebar:SidebarService ) { 



 
    
    this.getDataRoute().subscribe(data =>{
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);


      const metaTag: MetaDefinition ={
        name:'descripcion',
        contenido:this.titulo
      };
    this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }
  getDataRoute(){
    
    return this.router.events.pipe(
      //lo filtra por el evento activationEnd para sacar la data de las rutas
      filter(evento => evento instanceof ActivationEnd ),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild === null),
      //uso el map para mostrar los datos.
      map( (evento:ActivationEnd) => evento.snapshot.data )
      )
  }
}
