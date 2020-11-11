import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../model/Personne';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {}

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
}
