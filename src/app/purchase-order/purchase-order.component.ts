import { Component, OnInit } from '@angular/core';
import { company } from '../company';
import { product } from '../product';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  companyNames = ['lays', 'geneebo',
  'google'];

model = new company(18, 'lays', this.companyNames[0], '19dasfgsf23');
pmodel= new product(20,'','lays','lays',8,9,72)

submitted = false;

onSubmit() { this.submitted = true; }


// newProduct() {
// this.model = new company(42, '', '');
// }
purchase(){this.submitted = true;

}
Product(): company {
const myHero =  new company(42, 'lays',
                 'geneebo',
                 'Leslie');
console.log('My hero is called ' + myHero.name); 
return myHero;
}
}
