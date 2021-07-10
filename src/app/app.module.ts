import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ProductComponent,
    PurchaseOrderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
