import { Product } from "./../product.model";
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(private router: Router, private ProductService: ProductService, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.ProductService.update(this.product).subscribe(() => {
      console.log("Produto atualizado com sucesso!")
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
