import { Personne } from './../model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(
        1,
        'Jan',
        'Lawrence',
        30,
        'rotating_card_profile2.png',
        8888,
        'student'
      ),
      new Personne(
        2,
        'Kan',
        'kev',
        35,
        'rotating_card_profile3.png',
        8888,
        'chomage'
      ),
      new Personne(3, 'test', 'test', 35, '', 11111, 'test'),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Personne {
    const personne = this.personnes.find((personne) => {
      return personne.id == id;
    });
    return personne;
    // Passer le paramètre à travers le tableau de routerLink
    // Une autre méthode permet de passer le paramètre de la route
    //  est en l’ajoutant comme un autre attribut du
    //   tableau associé au routerLink
  }
}
