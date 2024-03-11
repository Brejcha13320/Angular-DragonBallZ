import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateCharacter } from '../../interfaces/character.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss',
})
export class AddCharacterComponent implements OnInit {
  @Output() character: EventEmitter<CreateCharacter> = new EventEmitter();

  formCharacter!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCharacter = this.fb.group({
      name: ['', Validators.required],
      power: [0, Validators.required],
    });
  }

  sendCharacter() {
    if (this.formCharacter.invalid) {
      alert('Formulario de Personaje no Valido');
      return;
    }

    this.character.emit(this.formCharacter.value);
    this.formCharacter.reset();
  }
}
