import { DatePipe, DecimalPipe, JsonPipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personne } from '../classes/personne';
import { PaireToimpairePipe } from '../pipes/paire-toimpaire.pipe';
import { CountCharacterPipe } from '../pipes/count-character.pipe';
import { ReverseStringPipe } from '../pipes/reverse-string.pipe';
import { SumDigitsPipePipe } from '../pipes/sum-digits.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    JsonPipe,
    CurrencyPipe,
    FormsModule,
    SlicePipe,
    PaireToimpairePipe,
    CountCharacterPipe,
    ReverseStringPipe,
    NgIf,
    SumDigitsPipePipe
  ],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  DateAujourd: Date = new Date();
  p1: Personne = new Personne(1, "test", "bbb");
  nbr: number = 100;
  var1: number = 0;
  msg: string = "hello dear student";

  // Ajout des variables pour le formulaire
  inputText: string = "";
  characterToCount: string = "";
  inputText2: string = "";
  inputNumber: number = 0; // Variable pour stocker le nombre
}
