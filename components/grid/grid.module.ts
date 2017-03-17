import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [GridComponent],
  declarations: [GridComponent]
})

export class GridModule { }
