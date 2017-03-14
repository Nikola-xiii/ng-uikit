import { RouterModule, Routes } from '@angular/router';
import { ButtonDocComponent } from './button-doc/button-doc.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonDocComponent }
];

export const routing = RouterModule.forRoot(routes);
