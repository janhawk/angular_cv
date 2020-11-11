import { PremierService } from './../premier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService],
})
export class ColorComponent implements OnInit {
  color = 'red';

  changeColor(input): void {
    console.log(input.value);
    this.color = input.value;
    input.value = '';
  }

  constructor(private premierService: PremierService) {}

  ngOnInit(): void {}

  loggerMesData(): void {
    this.premierService.logger('data test');
  }
  processReq(message: any): void {
    alert(message);
  }
}
