import { Component } from '@angular/core';

import { company } from '../company';
import { product } from '../product';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  companyNames = ['lays', 'geneebo',
            'google'];

  model = new company(18, 'lays', this.companyNames[0], '19dasfgsf23');
  pmodel= new product(20,'','lays','lays',8,9,72)

  submitted = false;

  onSubmit() { this.submitted = true; }


  newProduct() {
    this.model = new company(42, '', '');
  }

  Product(): company {
    const myHero =  new company(42, 'lays',
                           'geneebo',
                           'Leslie');
    console.log('My hero is called ' + myHero.name); 
    return myHero;
  }

}


