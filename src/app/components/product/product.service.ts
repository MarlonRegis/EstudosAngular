import { Observable } from 'rxjs';
import { Product } from "./product.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(/*private snackBar: MatSnackBar, */private HttpClient: HttpClient) { }

  baseUrl = "http://localhost:3001/products"

  /*showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }*/

  create(Product: Product): Observable<Product> {
    return this.HttpClient.post<Product>(this.baseUrl, Product)
  }
  read(): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(this.baseUrl)
  }
  readPage(page: number, limit: number): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(this.baseUrl + "?_page=" + page + "&_limit=" + limit)
  }

  readById(id: string): Observable<Product> {
    const urlId = `${this.baseUrl}/${id}`
    return this.HttpClient.get<Product>(urlId)
  }

  update(product: Product): Observable<Product> {
    const urlP = `${this.baseUrl}/${product.id}`
    return this.HttpClient.put<Product>(urlP, product)
  }

  deleteByID(id: string): Observable<Product> {
    const urlId = `${this.baseUrl}/${id}`
    return this.HttpClient.delete<Product>(urlId)
  }

}
