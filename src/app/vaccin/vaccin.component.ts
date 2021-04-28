import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.scss']
})
export class VaccinComponent implements OnInit {

  formGroupVaccin = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    telephone: new FormControl(''),
    courriel: new FormControl(''),
    essentiel: new FormControl('')
  });

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.formGroupVaccin.value);
  }

  ouvrirSnackBar(prenom: string): void {
    this.snackBar.open($localize`${prenom}, votre formulaire a été envoyé avec succès!`, '', {
      duration: 5000
    });
    this.formGroupVaccin.reset();
  }

}
