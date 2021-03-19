import { Component, OnInit, Inject  } from '@angular/core';
import { ProductsListComponent } from '../products-list.component';
import {Product} from '../product-service.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  constructor(    public dialogRef: MatDialogRef<ProductsListComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {}

  onSubmit(){
    this.dialogRef.close();
  }

  

}
