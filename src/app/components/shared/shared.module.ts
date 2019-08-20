import { NgModule } from '@angular/core';

//navbar
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
    declarations:
        [ NavbarComponent,  
          SidebarComponent ],
    imports: [ ],
    providers: [],
    exports:[
        NavbarComponent,
        SidebarComponent 
    ]
})
export class SharedModule {}