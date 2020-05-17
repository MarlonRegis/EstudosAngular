import { ProductService } from './../product.service';
import { Product } from "./../product.model";
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table'
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  products: Product[];
  dataSource = new MatTableDataSource(this.products)

  applyFilter(filterValue: string){
    console.log(filterValue)
    console.log(typeof(this.products))
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private ProductService: ProductService) { }
  
  ngOnInit(): void {
    this.ProductService.read().subscribe(products =>{
      this.products =products;
    })
  }
}
