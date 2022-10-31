import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { SampleService } from './sample.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private sample: SampleService;

  constructor(sample: SampleService) {
    this.sample = sample;
  }

  doMath() {
    return this.sample.add(2, 3);
  }

  products: Product[] | undefined = [];

  async ngOnInit() {
    this.products = await this.sample.getProducts();
  }

}
