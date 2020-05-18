import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
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

  /*showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error']: ['msg-sucess']
    })
  }*/

  errorHandler(e: any): Observable<any>{
    console.log("Ocorreu um erro!", e)
    return EMPTY
  }

  create(Product: Product): Observable<Product> {
    return this.HttpClient.post<Product>(this.baseUrl, Product).pipe(map(obj=> obj), catchError(e=> this.errorHandler(e) ));
  }
  read(): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(this.baseUrl).pipe(map(obj=> obj), catchError(e=> this.errorHandler(e) ))
  }
  readPage(page: number, limit: number): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(this.baseUrl + "?_page=" + page + "&_limit=" + limit).pipe(map(obj=> obj), catchError(e=> this.errorHandler(e) ))
  }

  readById(id: string): Observable<Product> {
    const urlId = `${this.baseUrl}/${id}`
    return this.HttpClient.get<Product>(urlId).pipe(map(obj=> obj), catchError(e=> this.errorHandler(e) ))
  }

  update(product: Product): Observable<Product> {
    const urlP = `${this.baseUrl}/${product.id}`
    return this.HttpClient.put<Product>(urlP, product).pipe(map(obj=> obj), catchError(e=> this.errorHandler(e) ))
  }

  deleteByID(id: string): Observable<Product> {
    const urlId = `${this.baseUrl}/${id}`
    return this.HttpClient.delete<Product>(urlId).pipe(map(obj=> obj), catchError(e=> this.errorHandler(e) ))
  }

}
