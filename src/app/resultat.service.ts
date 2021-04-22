import { Injectable } from '@angular/core';
import resultats from '../assets/data/resultat.json';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  listeResultats: any[] = resultats;

  constructor() { }

  getAll(): any[] {
    return this.listeResultats;
  }

  getTopEnfant(): any[] {
    let listeTopEnfant: any[] = [];
    let plusGrandNombreDeCas: number = 0;
    //Trouver la valeur maximum de la clé enfant dans la liste
    this.listeResultats.forEach(resultat => {
      if(resultat.enfant > plusGrandNombreDeCas) {
        plusGrandNombreDeCas = resultat.enfant;
      }
    });
    //Récolter la ou les valeurs qui sont égales au maximum de la liste et les ajouter dans le tableau à retourner
    this.listeResultats.forEach(resultat => {
      if(resultat.enfant === plusGrandNombreDeCas) {
        listeTopEnfant.push(resultat);
      }
    });
    return listeTopEnfant;
  }
}
