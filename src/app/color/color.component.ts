import { PremierService } from './../premier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private premierService: PremierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) // ActivatedRoute is a routing params par example http://localhost:4200/color/color u want to show,
  {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      this.color = params['default'];
      // routing params
    });
  }

  loggerMesData(): void {
    this.premierService.logger('data test');
  }
  processReq(message: any): void {
    alert(message);
  }

  goToCv(): void {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
