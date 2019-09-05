import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { 
  
  }

  pedidos:any = [
        { titulo:'Crear Pedido', url:'/crearpedido',icono:'mdi mdi-book-open'},
        { titulo:'Mis Pedidos', url:'/mispedidos',icono:'mdi mdi-account'},
        { titulo:'Historial Pedidos', url:'/historialpedidos',icono:'mdi mdi-border-color'},
      ];
  encargados:any=[
    { titulo:'Crear Encargado', url:'/crearencargado',icono:'mdi mdi-account-plus'},
    { titulo:'Lista Encargados', url:'/listaencargados',icono:'mdi mdi-account-multiple'},
  ];
}
