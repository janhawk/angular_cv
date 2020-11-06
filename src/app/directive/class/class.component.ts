import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  teams = ['est', 'om', 'barca', 'milan'];
  show = false;
  est = false;
  barca = false;
  milan = true;

  constructor() {}

  ngOnInit(): void {}

  changeTeam(): void {
    this.barca = false;
    this.milan = false;
    this.est = true;
  }
}
