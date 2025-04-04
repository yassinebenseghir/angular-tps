import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Personne } from '../classes/personne';
import { NgFor, NgIf } from '@angular/common';
import { DirectivesexamplesComponent } from '../directivesexamples/directivesexamples.component';
import { JeuComponent } from '../jeu/jeu.component';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';
import { FormsComponent } from '../forms/forms.component';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {CalculatriceComponent} from '../calculatrice/calculatrice.component'

@Component({
  selector: 'app-home',
  imports:[RouterOutlet, FormsModule,NgFor, DirectivesexamplesComponent,JeuComponent,PipeExampleComponent,FormsComponent,EtudiantComponent,HeaderComponent,FooterComponent,CalculatriceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'tp01';
    public valeur1: number = 10;
    public val: string = '';

    personne: Personne = new Personne(10, 'benseghir', 'yassine');
    readonly tab: number[] = [14, 10, 15, 20];

    direBonjour(): string {
      return 'Bonjour mes étudiants';
    }

    public AfficherAlert(): void {
      console.log('Vous avez cliqué sur le bouton');
      alert('Déclenchement de l’événement');
    }

    constructor() {
      console.log('AppComponent chargé 🚀');
    }

  }

