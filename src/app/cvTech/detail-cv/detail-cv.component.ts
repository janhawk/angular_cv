import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../model/Personne';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  embaucher(): void {
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(): void {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
