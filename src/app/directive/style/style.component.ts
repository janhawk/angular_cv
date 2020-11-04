import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
})
export class StyleComponent implements OnInit {
  @Input() color = 'red';
  @Input() bgColor = 'green';
  size = '25px';
  constructor() {}

  ngOnInit(): void {}

  // disable this if u use 2way binding
  changeColor(color: string): void {
    this.color = color;
  }

  changeSize(size: number): void {
    this.size = size + 'px';
  }

  changebgColor(bgColor: string): void {
    this.bgColor = bgColor;
  }
}
