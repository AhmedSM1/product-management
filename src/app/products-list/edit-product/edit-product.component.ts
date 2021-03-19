import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductsListComponent } from '../products-list.component';
import {Product} from '../product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<ProductsListComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    this.dialogRef.close();
  }

  
}
