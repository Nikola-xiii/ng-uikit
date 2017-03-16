import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgUIKitModule } from '../../components/ng-uikit.module'
import { ButtonDocComponent } from './button-doc/button-doc.component';
import { MenuDocComponent } from './menu-doc/menu-doc.component';
import { ReadmeComponent } from './readme/readme.component';
import { PrismComponent } from './prism/prism.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDocComponent,
    MenuDocComponent,
    ReadmeComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    NgUIKitModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
