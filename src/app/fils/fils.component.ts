import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(
      'Fils component : voici le contenue de la variable color',
      this.filsProperty
    );
  }
  sendEvent(): void {
    this.sendRequestToData.emit(`Send me money`);
  }
}
