import { PremierService } from './../premier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  color = 'red';
  constructor(private premierService: PremierService) {}

  ngOnInit(): void {}
  processReq(messge: string): void {
    alert(messge);
  }
  loggerMesData(): void {
    this.premierService.logger('test');
  }
}
