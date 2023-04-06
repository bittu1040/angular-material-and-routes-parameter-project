import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: any;
  constructor(
    private router: Router, private productServices: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productServices.productList();
  }


  show(id, name){
    this.router.navigate(['details', id, name])
  }
}