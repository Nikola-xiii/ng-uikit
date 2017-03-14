import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonModule } from '../../ng-uikit';
import { HeaderModule } from '../../ng-uikit';
import { SidebarModule } from '../../ng-uikit';
import { MenuModule } from '../../ng-uikit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HeaderModule,
    SidebarModule,
    MenuModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
