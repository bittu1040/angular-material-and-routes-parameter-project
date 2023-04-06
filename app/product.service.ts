import { Injectable } from '@angular/core';
import {products} from './products'

@Injectable()
export class ProductService {

  constructor() { }


  productDetailed(id: string) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        return products[i];
      }
    }
  }

  productList() {
    return products;
  }
}