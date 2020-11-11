import { Personne } from './../model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  personnes: Personne[];
  constructor() {
    this.personnes = [];
  }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.name} est deja selestionée`);
    }
  }
  debaucher(personne): void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index);
    }
  }
}
