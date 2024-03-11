import { Component } from '@angular/core';
import { Character, CreateCharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.scss',
})
export class DbzComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  addCharacter(character: CreateCharacter) {
    this.dbzService.addCharacter(character);
  }

  deleteCharacter(id: string) {
    this.dbzService.deleteCharacter(id);
  }
}
