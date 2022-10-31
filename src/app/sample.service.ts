import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  add(num1: number, num2:number) {
    return num1 + num2;
  }

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getProducts(): Promise<Product[] | undefined> { //http client to get data from backend
    let products = await lastValueFrom(this.http.get<Product[]>('https://pw-uiewg-walletapp.firebaseio.com/products.json'));
  //let response = await fetch('https://pw-uiewg-walletapp.firebaseio.com/products.json');
  //let products = await response.json();
  return products;
  }
}
