import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectModule } from './select/select.module';
import { ButtonModule } from './button/button.module';

var MATERIAL_MODULES = [
  SelectModule,
  ButtonModule
];

// @NgModule({
//   declarations: [
//     SelectComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: []
// })
// export class AppModule { }
