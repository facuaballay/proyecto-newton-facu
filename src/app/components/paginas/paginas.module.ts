import { NgModule } from '@angular/core';

//pedidos
import { CrearEncargadoComponent } from './admin/crear-encargado/crear-encargado.component';
import { CrearPedidosComponent } from './crear-pedidos/crear-pedidos.component';
import { HistorialPedidosComponent } from './historial-pedidos/historial-pedidos.component';
import { ListaEncargadosComponent } from './admin/lista-encargados/lista-encargados.component';
import { MisPedidosComponent } from './usuario/mis-pedidos/mis-pedidos.component';

@NgModule({
    declarations:[ 
        CrearEncargadoComponent,
        CrearPedidosComponent,
        HistorialPedidosComponent,
        ListaEncargadosComponent,
        MisPedidosComponent


     ],
    imports: [ ],
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