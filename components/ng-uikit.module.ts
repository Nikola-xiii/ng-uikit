import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MenuModule } from './menu/menu.module';
import { ButtonModule } from './button/button.module';
import { GridModule } from './grid/grid.module';


var MATERIAL_MODULES = [
  HeaderModule,
  SidebarModule,
  MenuModule,
  ButtonModule,
  GridModule,
];

@NgModule({
  exports: MATERIAL_MODULES,
})

export class NgUIKitModule { }
