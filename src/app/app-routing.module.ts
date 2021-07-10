import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import {ProductComponent} from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
const routes: Routes = [
  {path:'company',component:CompanyComponent},
  {path:'product',component:ProductComponent},
  {path:'purchase',component:PurchaseOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
