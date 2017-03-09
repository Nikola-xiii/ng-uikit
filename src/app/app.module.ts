import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SelectComponent } from '../../ng-uikit'
import { ButtonComponent } from '../../ng-uikit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
