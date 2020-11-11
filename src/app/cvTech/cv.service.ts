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
        'law',
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
}
