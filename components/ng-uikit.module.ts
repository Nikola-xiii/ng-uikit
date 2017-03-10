import { NgModule } from '@angular/core';
import { SelectModule } from './select/select.module';
import { ButtonModule } from './button/button.module';

var MATERIAL_MODULES = [
  SelectModule,
  ButtonModule
];

@NgModule({
  imports: MATERIAL_MODULES,
})

export class NgUIKitModule { }
