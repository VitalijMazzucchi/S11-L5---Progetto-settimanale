import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista/lista.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [ListaComponent],
})
export class ListaModule {}
