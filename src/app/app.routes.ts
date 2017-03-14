import { RouterModule, Routes } from '@angular/router';
import { ButtonDocComponent } from './button-doc/button-doc.component';
import { MenuDocComponent } from './menu-doc/menu-doc.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonDocComponent },
  { path: 'menu', component: MenuDocComponent }
];

export const routing = RouterModule.forRoot(routes);
