import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { CommonModule } from '@angular/common';
import { AppComponent} from './app.component';
import { NgUIKitModule } from '../../components/ng-uikit.module'
import { ButtonPage } from './button-page/button-page.component';
import { MenuPage } from './menu-page/menu-page.component';
import { ReadmePage } from './readme/readme.component';
import { GridPage } from './grid-page/grid-page.component';
import { InputPage } from './input-page/input-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPage,
    MenuPage,
    ReadmePage,
    GridPage,
    InputPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgUIKitModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
