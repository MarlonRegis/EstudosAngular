import { Product } from "./../product.model";
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  delete(): void {
    console.log(this.product.id)
    this.ProductService.deleteByID(`${this.product.id}`).subscribe(() =>
      console.log("Produto excluido com sucesso!"))
    this.router.navigate(['/products'])

  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
  
  constructor(private ProductService: ProductService, private router: Router, private routAct: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routAct.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product=> {
      this.product = product;
    })
  }

}
