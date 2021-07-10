import { Component, OnInit } from '@angular/core';
import { company } from '../company';
import { product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  companyNames = ['lays', 'geneebo',
  'google'];

model = new company(18, 'lays', this.companyNames[0], '19dasfgsf23');
pmodel= new product(20,'kk','lays','lays',8,9,72)
purchase(){this.submitted = true;

}
submitted = false;

onSubmit() { this.submitted = true; }


// newProduct() {
// this.model = new company(42, '', '');
// }

Product(): company {
const myHero =  new company(42, 'lays',
                 'geneebo',
                 'Leslie');
console.log('My hero is called ' + myHero.name); 
return myHero;
}
}
