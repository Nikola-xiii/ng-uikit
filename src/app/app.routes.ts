import { RouterModule, Routes } from '@angular/router';
import { ButtonDocComponent } from './button-doc/button-doc.component';
import { MenuDocComponent } from './menu-doc/menu-doc.component';
import { ReadmeComponent } from './readme/readme.component'

const routes: Routes = [
  { path: 'buttons', component: ButtonDocComponent },
  { path: 'menu', component: MenuDocComponent },
  { path: 'readme', component: ReadmeComponent }
];

export const routing = RouterModule.forRoot(routes);
