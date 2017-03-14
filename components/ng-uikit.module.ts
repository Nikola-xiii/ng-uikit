import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MenuModule } from './menu/menu.module';
import { ButtonModule } from './button/button.module';


var MATERIAL_MODULES = [
  HeaderModule,
  SidebarModule,
  MenuModule,
  ButtonModule,
];

@NgModule({
  exports: MATERIAL_MODULES,
})

export class NgUIKitModule { }
