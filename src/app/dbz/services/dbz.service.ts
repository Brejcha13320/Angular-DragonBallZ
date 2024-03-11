import { Injectable } from '@angular/core';
import { Character, CreateCharacter } from '../interfaces/character.interface';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Dash',
      power: 3000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];

  addCharacter(character: CreateCharacter): void {
    this.characters.push({ id: uuid(), ...character });
  }

  deleteCharacter(id: string): void {
    console.log('id', id);
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
