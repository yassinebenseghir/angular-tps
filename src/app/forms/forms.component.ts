import { Component } from '@angular/core';
import { NgForm, FormsModule,ReactiveFormsModule,Validators,FormBuilder,FormControl,FormGroup,AbstractControl, ValidationErrors } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,NgIf,ReactiveFormsModule], // Ajoute ReactiveFormsModule ici
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  formData: any = {};
  affichageMessage: boolean = false;

  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, this.hasExclamationMark.bind(this)]);
  loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor() {}

  ngOnInit(): void {}

  /**
   * Handles the submission of the user registration form.
   * If the form is valid, it captures the form data,
   * sets the display message flag to true, and logs the form data to the console.
   *
   * @returns {void}
   */
  enregistrerUtilisateur(): void {
    if (this.loginForm.valid) {
      this.formData = this.loginForm.value;
      this.affichageMessage = true;
      console.log('Formulaire soumis avec :', this.formData);
      this.loginForm.reset();

    }
  }


  hasExclamationMark(control: AbstractControl): ValidationErrors | null {
    const hasExclamation = (control.value || '').includes('!');
    return hasExclamation ? null : { needsExclamation: true };
  }
}
