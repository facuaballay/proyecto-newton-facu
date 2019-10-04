import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pedido } from '../../../models/Pedido.model';
import { PedidosService } from '../../../services/pedidos/pedidos.service';


@Component({
  selector: 'app-crear-pedidos',
  templateUrl: './crear-pedidos.component.html',
  styleUrls: ['./crear-pedidos.component.scss']
})
export class CrearPedidosComponent implements OnInit {


  formPedido: FormGroup;
  todolisto:any;

  porcentaje:number = 90;

  constructor(public _PedidosService:PedidosService) { }

  ngOnInit() {

    var id = localStorage.getItem('empresa');

    this.todolisto = JSON.parse(id);

    this.formPedido = new FormGroup({
      tipo:new FormControl(`${this.todolisto.role}` , Validators.required),
      creador_id:new FormControl(`${this.todolisto.id}` , Validators.required),
      nombre:new FormControl(null , Validators.required),
      descripcion:new FormControl(null , Validators.required),
      progreso:new FormControl(null , Validators.required),
      precio:new FormControl(null , Validators.required),
      user_id:new FormControl(null , Validators.required)
      });

     
  }

crearPedido(){


  let pedido = new Pedido(this.formPedido.value.tipo,
    this.formPedido.value.creador_id,
    this.formPedido.value.nombre,
    this.formPedido.value.descripcion,
    this.formPedido.value.progreso,
    this.formPedido.value.precio,
    this.formPedido.value.user_id
   
      )
      this._PedidosService.crearUsuario(pedido).subscribe(res=>{
        
      })

}

}
