import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'


const APP_ROUTER: Routes = [
    {path: "", component: HomeComponent},
    {path: "products", component: ProductCrudComponent},
    {path: "products/create", component:ProductCreateComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);