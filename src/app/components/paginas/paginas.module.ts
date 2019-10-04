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
import { DigitOnlyModule } from '@uiowa/digit-only';
import { SharedModule } from '../shared/shared.module';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[ 
        CrearEncargadoComponent,
        CrearPedidosComponent,
        HistorialPedidosComponent,
        ListaEncargadosComponent,
        MisPedidosComponent,
        HomeComponent,
        NavegacionComponent


     ],
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        PAGES_ROUTES,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        DigitOnlyModule
        
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