import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  
  constructor() { 
  
  }
  ngOnInit() {
    
  }

  pedidos:any = [
        { titulo:'Crear Pedido', url:'/crearpedido',icono:'mdi mdi-book-open',tipo:'usuario'},
        { titulo:'Mis Pedidos', url:'/mispedidos',icono:'mdi mdi-account',},
        { titulo:'Historial Pedidos', url:'/historialpedidos',icono:'mdi mdi-border-color',tipo:'usuario'},
      ];
  encargados:any=[
    { titulo:'Nuevo Encargado', url:'/crearencargado',icono:'mdi mdi-account-plus',tipo:'empresa'},
    { titulo:'Lista Encargados', url:'/listaencargados',icono:'mdi mdi-account-multiple',tipo:'empresa'},
  ];

  
}
