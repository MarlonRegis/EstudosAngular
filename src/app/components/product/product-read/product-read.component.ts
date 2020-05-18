import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductService } from './../product.service';
import { Product } from "./../product.model";
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  products: Product[];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }
}
