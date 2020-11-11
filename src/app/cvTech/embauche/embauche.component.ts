import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbauchees();
  }
}
