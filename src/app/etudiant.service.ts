import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This allows the service to be injected globally in the app
})
export class EtudiantService {
  
  private etudiantList: Array<any> = [{ nom: 'CHOUGDALI', age: 41, ville: 'Temara' }];

  constructor() {}

  
  getEtudiantData(): Array<any> {
    return this.etudiantList;
  }

  
  ajouterEtudiantData(item: any): void {
    this.etudiantList.push(item);
  }
}
