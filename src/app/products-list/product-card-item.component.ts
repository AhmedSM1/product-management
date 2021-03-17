import { Component, Input, OnInit } from '@angular/core';





@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent implements OnInit {
  @Input() product;

  constructor() { }

  ngOnInit(): void {
  }

}
