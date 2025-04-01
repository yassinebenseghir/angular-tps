import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,NgClass,NgStyle } from '@angular/common';
// Import CommonModule for directives

@Component({
  selector: 'app-directivesexamples',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,NgClass,NgStyle],
  templateUrl: './directivesexamples.component.html',
  styleUrls: ['./directivesexamples.component.css']
})
export class DirectivesexamplesComponent {
  tab: number[] = [2,5, 4, 6, 14, 8];
  moyennes: number[] = [14,9,15,16,15,11,2];
  AfficheColor: boolean=false;
  public changeColor() :void{
    this.AfficheColor=!this.AfficheColor;
  }
}
