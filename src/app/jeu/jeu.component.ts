import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jeu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent {
  nombreSecret: number = this.genererNombreSecret();
  nombreSaisi: number = 0;
  message: string = '';
  tentatives: number = 0;
  maxTentatives: number = 5;
  jeuTermine: boolean = false;

  genererNombreSecret(): number {
    return Math.floor(Math.random() * 10) + 1; 
  }

  verifierNombre() {
    if (this.jeuTermine) return; // Stop le jeu si déjà gagné

    if (this.tentatives < this.maxTentatives) {
      this.tentatives++;

      if (this.nombreSaisi > this.nombreSecret) {
        this.message = "Le nombre saisi est supérieur au nombre secret.";
      } else if (this.nombreSaisi < this.nombreSecret) {
        this.message = "Le nombre saisi est inférieur au nombre secret.";
      } else {
        this.message = "Bravo ! Vous avez gagné !!! 🎉";
        this.jeuTermine = true;
      }

      if (this.tentatives === this.maxTentatives && this.nombreSaisi !== this.nombreSecret) {
        this.message = "Vous avez atteint le nombre maximal de tentatives. Le nombre secret était " + this.nombreSecret;
        this.jeuTermine = true;
      }
    }
  }

  recommencer() {
    this.nombreSecret = this.genererNombreSecret();
    this.nombreSaisi = 0;
    this.message = '';
    this.tentatives = 0;
    this.jeuTermine = false;
  }
}
