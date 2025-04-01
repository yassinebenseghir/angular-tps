import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service'; // Importer le service

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  // Déclarer un tableau d'étudiants pour stocker les données récupérées du service
  etudiants: Array<any> = [];

  constructor(private etudiantService: EtudiantService) { } // Injecter le service

  ngOnInit(): void {
    // Récupérer les données des étudiants au moment de l'initialisation du composant
    this.etudiants = this.etudiantService.getEtudiantData();
  }

  // Méthode pour ajouter un étudiant
  addEtudiant(newEtudiant: any): void {
    this.etudiantService.ajouterEtudiantData(newEtudiant);
    this.etudiants = this.etudiantService.getEtudiantData(); // Actualiser la liste après l'ajout
  }
}
