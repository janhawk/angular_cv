import { CvService } from './../cv.service';
import { PremierService } from './../../premier.service';
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

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
    // this.personnes = [
    //   new Personne(
    //     1,
    //     'Jan',
    //     'law',
    //     30,
    //     'rotating_card_profile2.png',
    //     8888,
    //     'student'
    //   ),
    //   new Personne(
    //     2,
    //     'Kan',
    //     'kev',
    //     35,
    //     'rotating_card_profile3.png',
    //     8888,
    //     'chomage'
    //   ),
    //   new Personne(3, 'test', 'test', 35, '', 11111, 'test'),
    // ];
    // this.premierService.addData('data from cv component');
    // this.premierService.logger(this.personnes);
  }

  selectPersonne(personne): void {
    this.selectedPersonne = personne;
  }
}
