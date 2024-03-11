import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/dbz.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DbzComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DbzComponent],
})
export class DbzModule {}
