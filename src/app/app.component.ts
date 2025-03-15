import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from './classes/personne'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp01';

  public valeur1: number = 10;

  personne: Personne = new Personne(10,'benseghir','yassine');

  tab: number[] = [14,10,15,20];

  direBonjour() : string {
    return 'Bonjour mes etudiants'
  }
  public AfficherAlert() : void{
    console.log('vous avez cliqué le bouton');
    alert('declanchemeent de levenement')
  }

  constructor(){}

}
