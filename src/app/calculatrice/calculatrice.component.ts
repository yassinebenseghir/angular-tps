import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  display: string = '0'; // Écran de la calculatrice

  appendNumber(num: string) {
    this.display = this.display === '0' ? num : this.display + num;
  }

  clear() {
    this.display = '0';
  }

  calculate() {
    try {
      this.display = eval(this.display); // ⚠️ Attention : eval() est dangereux en prod !
    } catch {
      this.display = 'Erreur';
    }
  }
}
