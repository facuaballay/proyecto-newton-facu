import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';

//componentes
import { CrearEncargadoComponent } from './admin/crear-encargado/crear-encargado.component';
import { CrearPedidosComponent } from './crear-pedidos/crear-pedidos.component';
import { HistorialPedidosComponent } from './historial-pedidos/historial-pedidos.component';
import { ListaEncargadosComponent } from './admin/lista-encargados/lista-encargados.component';
import { MisPedidosComponent } from './usuario/mis-pedidos/mis-pedidos.component';
import { HomeComponent } from './home/home.component';
//rutas
import { PAGES_ROUTES } from './paginas.routes';
//modulos
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[ 
        CrearEncargadoComponent,
        CrearPedidosComponent,
        HistorialPedidosComponent,
        ListaEncargadosComponent,
        MisPedidosComponent,
        HomeComponent


     ],
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        PAGES_ROUTES,
        SharedModule,
         ],
    providers: [],
    exports:[
        CrearEncargadoComponent,
        CrearPedidosComponent,
        HistorialPedidosComponent,
        ListaEncargadosComponent,
        MisPedidosComponent

    ]
})

export class PaginasModule {}