import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public todo;
  constructor(public servicio:ServiceService) { }

  ngOnInit() {
  }
  todos(){
        
    this.servicio.getTodo().subscribe( data =>{
      
      
      this.todo = data;

      console.log(this.todo);
    });
  }
}
