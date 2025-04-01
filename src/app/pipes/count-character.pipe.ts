import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countCharacter',
  standalone: true
})
export class CountCharacterPipe implements PipeTransform {
  transform(value: string, character: string): number {
    console.log("Texte reçu :", value);
    console.log("Caractère recherché :", character);

    if (!value || !character.trim()) {
      console.log("Retourne 0");
      return 0;
    }

    const occurences = value.split(character).length - 1;
    console.log("Nombre d'occurrences :", occurences);

    return occurences;
  }
}
