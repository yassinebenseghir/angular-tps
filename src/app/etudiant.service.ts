import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This allows the service to be injected globally in the app
})
export class EtudiantService {
  // List to store etudiant data
  private etudiantList: Array<any> = [{ nom: 'CHOUGDALI', age: 41, ville: 'Temara' }];

  constructor() {}

  // Method to get etudiant data
  getEtudiantData(): Array<any> {
    return this.etudiantList;
  }

  // Method to add a new etudiant
  ajouterEtudiantData(item: any): void {
    this.etudiantList.push(item);
  }
}
