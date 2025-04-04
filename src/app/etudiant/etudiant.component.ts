import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-etudiant',
  imports: [FormsModule,CommonModule,NgFor ],
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: Array<any> = [];


  newEtudiant = {
    nom: '',
    age: null,
    ville: ''
  };

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getEtudiantData();
  }

  addEtudiant(etudiant: any): void {
    // Create a copy of the object to avoid reference issues
    const etudiantToAdd = {
      nom: etudiant.nom,
      age: etudiant.age,
      ville: etudiant.ville
    };

    this.etudiantService.ajouterEtudiantData(etudiantToAdd);
    this.etudiants = this.etudiantService.getEtudiantData();
  }

  resetForm(): void {

    this.newEtudiant = {
      nom: '',
      age: null,
      ville: ''
    };
  }
}
