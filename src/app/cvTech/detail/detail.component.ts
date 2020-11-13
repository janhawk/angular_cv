import { Personne } from './../../model/Personne';
import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.personne = this.cvService.getPersonneById(params.id);
      console.log(this.personne);
      // Passer le paramètre à travers le tableau de routerLink
      // Une autre méthode permet de passer le paramètre de la route
      //  est en l’ajoutant comme un autre attribut du
      //   tableau associé au routerLink
    });
  }
}
