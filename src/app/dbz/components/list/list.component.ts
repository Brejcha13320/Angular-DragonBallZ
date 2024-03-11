import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() characters: Character[] = [];
  @Output() deleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id: string) {
    this.deleteCharacter.emit(id);
  }
}
