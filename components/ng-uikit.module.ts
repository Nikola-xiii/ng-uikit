import { NgModule } from '@angular/core';
import { GridModule } from './grid/grid.module';
import { MenuModule } from './menu/menu.module';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';


let MATERIAL_MODULES = [
  MenuModule,
  ButtonModule,
  GridModule,
  InputModule
];

@NgModule({
  exports: MATERIAL_MODULES,
})

export class NgUIKitModule { }
