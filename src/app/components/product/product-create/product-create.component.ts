import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  
  }
  createProduct():void{
    this.ProductService.showMessage('Cadastro de produto realizado!')
  }
}
