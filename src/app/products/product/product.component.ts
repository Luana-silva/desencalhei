import { Component, OnInit, Input, Output } from '@angular/core';
import { Constants } from '../../utils/constants'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   @Input() product: any

  constructor() { }  
  
  getUrlProduct(idProduct: string) {
    let url = `${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}product/productImage/${idProduct}/main`;
    return url;
  }


  ngOnInit() {  
    
  }
}
