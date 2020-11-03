import { Personne } from './../../model/Personne';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
})
export class ItemCvComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectPeronne(): void {
    this.selectedPersonne.emit(this.personne);
  }
}
