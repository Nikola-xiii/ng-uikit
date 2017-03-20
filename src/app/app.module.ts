import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { CommonModule } from '@angular/common';
import { AppComponent} from './app.component';
import { NgUIKitModule } from '../../components/ng-uikit.module'
import { ButtonDocComponent } from './button-doc/button-doc.component';
import { MenuDocComponent } from './menu-doc/menu-doc.component';
import { ReadmeComponent } from './readme/readme.component';
import { GridDocComponent } from './grid-doc/grid-doc.component';
import { CodeViewComponent} from './code-view/code-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDocComponent,
    MenuDocComponent,
    ReadmeComponent,
    GridDocComponent,
    CodeViewComponent
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
