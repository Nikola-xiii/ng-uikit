import { RouterModule, Routes } from '@angular/router';
import { ButtonPage } from './button-page/button-page.component';
import { MenuPage } from './menu-page/menu-page.component';
import { ReadmePage} from './readme/readme.component';
import { GridPage } from './grid-page/grid-page.component'
import { InputPage } from './input-page/input-page.component'

const routes: Routes = [
  { path: 'buttons', component: ButtonPage },
  { path: 'menu', component: MenuPage },
  { path: 'grid', component: GridPage },
  { path: 'readme', component: ReadmePage },
  { path: 'input', component: InputPage },
  { path: '', redirectTo: 'readme', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);
