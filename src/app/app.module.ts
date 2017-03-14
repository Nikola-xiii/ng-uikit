import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
// import { ButtonModule } from '../../ng-uikit';
// import { HeaderModule } from '../../ng-uikit';
// import { SidebarModule } from '../../ng-uikit';
// import { MenuModule } from '../../ng-uikit';
import { AppComponent } from './app.component';
import { NgUIKitModule } from '../../components/ng-uikit.module'
import { ButtonDocComponent } from './button-doc/button-doc.component';
import { MenuDocComponent } from './menu-doc/menu-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDocComponent,
    MenuDocComponent,
  ],
  imports: [
    BrowserModule,
    NgUIKitModule,
    // ButtonModule,
    // HeaderModule,
    // SidebarModule,
    // MenuModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
