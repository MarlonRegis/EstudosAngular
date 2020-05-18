import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //a classe behavior irá emitir eventos em caso de alteração

  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Teste",
    icon: 'home',
    routeUrl: ''
  })

 get headerData(): HeaderData{
   return this._headerData.value
 }

  set headerData(headerData: HeaderData ) {
    this._headerData.next(headerData)
  }
  
  constructor() { }
}
