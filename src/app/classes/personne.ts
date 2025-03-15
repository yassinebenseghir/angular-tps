export class Personne {
  private _num: number;
  private _nom: string;
  private _prenom: string;

  constructor(_num: number, _nom: string, _prenom: string) {
    this._num = _num;
    this._nom = _nom;
    this._prenom = _prenom;
  }

  // Getter pour le numéro
  get num() {
    return this._num;
  }

  // Setter pour le numéro
  set num(_num: number) {
    this._num = _num;
  }

  // Getter pour le nom
  get nom() {
    return this._nom;
  }

  // Setter pour le nom
  set nom(nom: string) {
    this._nom = nom;
  }

  // Getter pour le prénom
  get prenom() {
    return this._prenom;
  }

  // Setter pour le prénom
  set prenom(_prenom: string) {
    this._prenom = _prenom;
  }
}
