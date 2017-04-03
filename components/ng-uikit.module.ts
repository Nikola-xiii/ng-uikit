import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ContentModule } from './content/content.module';
import { GridModule } from './grid/grid.module';
import { MenuModule } from './menu/menu.module';
import { ButtonModule } from './button/button.module';


let MATERIAL_MODULES = [
  HeaderModule,
  SidebarModule,
  ContentModule,
  MenuModule,
  ButtonModule,
  GridModule,
];

@NgModule({
  exports: MATERIAL_MODULES,
})

export class NgUIKitModule { }
