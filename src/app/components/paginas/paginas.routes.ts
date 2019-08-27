import { Routes, RouterModule } from "@angular/router";


//components admin
import { CrearEncargadoComponent } from './admin/crear-encargado/crear-encargado.component';
import { ListaEncargadosComponent } from './admin/lista-encargados/lista-encargados.component';
import { CrearPedidosComponent } from './crear-pedidos/crear-pedidos.component';
import { HistorialPedidosComponent } from './historial-pedidos/historial-pedidos.component';
import { MisPedidosComponent } from './usuario/mis-pedidos/mis-pedidos.component';


//componentes home
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "crearencargado", component:CrearEncargadoComponent },
      { path: "listaencargados", component: ListaEncargadosComponent },
      { path: "crearpedido", component: CrearPedidosComponent },
      { path: "historialpedidos", component: HistorialPedidosComponent },
      { path: "mispedidos", component:MisPedidosComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" },
    ],
  },
 
];

export const PAGES_ROUTES = RouterModule.forChild(routes);
 