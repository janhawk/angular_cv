import { Personne } from '../../model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;

  constructor() {}

  ngOnInit(): void {
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
    ];
  }

  selectPersonne(personne): void {
    this.selectedPersonne = personne;
  }
}
