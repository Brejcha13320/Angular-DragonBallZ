export interface Character {
  id: string;
  name: string;
  power: number;
}

export type CreateCharacter = Omit<Character, 'id'>;
