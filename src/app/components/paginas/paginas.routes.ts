import { Routes, RouterModule, CanActivate } from '@angular/router';


//components admin
import { CrearEncargadoComponent } from './admin/crear-encargado/crear-encargado.component';
import { ListaEncargadosComponent } from './admin/lista-encargados/lista-encargados.component';
import { CrearPedidosComponent } from './crear-pedidos/crear-pedidos.component';
import { HistorialPedidosComponent } from './historial-pedidos/historial-pedidos.component';
import { MisPedidosComponent } from './usuario/mis-pedidos/mis-pedidos.component';


//componentes home
import { HomeComponent } from './home/home.component';
import { RutasGuard } from '../../services/guards/rutas.guard';
import { RoleEmpresaGuard } from '../../services/guards/roleEmpresa.guard';
import { RoleEncargadoGuard } from '../../services/guards/role-encargado.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
     canActivate:[RutasGuard],
    
    children: [
      { path: "crearencargado", component:CrearEncargadoComponent,canActivate:[RoleEmpresaGuard],data:{titulo:'Nuevo Encargado'} },
      { path: "listaencargados", component: ListaEncargadosComponent,canActivate:[RoleEmpresaGuard],data:{titulo:'Lista Encargados'} },
      { path: "crearpedido", component: CrearPedidosComponent,data:{titulo:'Crear Pedido'} },
      { path: "historialpedidos", component: HistorialPedidosComponent,canActivate:[RoleEncargadoGuard],data:{titulo:'Historial Pedidos'} },
      { path: "mispedidos", component:MisPedidosComponent,data:{titulo:'Mis Pedidos'} },
      { path: "", redirectTo: "/mispedidos", pathMatch: "full" },
    ],
  },
 
];

export const PAGES_ROUTES = RouterModule.forChild(routes);
 