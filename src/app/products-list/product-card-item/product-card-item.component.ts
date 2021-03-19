import { Component,Input,Output ,OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent implements OnInit {

  @Input() currentProduct;
  @Output() prodductIsDeleted = new EventEmitter();


  constructor( ) { }

  ngOnInit(): void {
    console.log(this.currentProduct["name"])
    this.currentProduct;
  }


  deleteProduct(productId){
    this.prodductIsDeleted.emit(this.currentProduct.id);
  }



}
