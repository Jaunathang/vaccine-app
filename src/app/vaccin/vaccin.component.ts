import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.scss']
})
export class VaccinComponent implements OnInit {

  formulaireVaccin= new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    telephone: new FormControl(''),
    courriel: new FormControl(''),
    essentiel: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.formulaireVaccin.value);
  }

}
