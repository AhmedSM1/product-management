import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import {AddProductComponent } from './add-product/add-product.component';
import {MatDialog} from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: any[];

  constructor(private productServiceService: ProductServiceService ,
    public dialog: MatDialog ) { }

  ngOnInit() {
   this.getProductsFromService()
  }


  getProductsFromService(){
    this.productServiceService.getFromJson().subscribe((data: []) => {
      console.log("recieved data for "+ data["name"])
      this.products = data;
       });
    }


  openDialog(){
      const dialogRef = this.dialog.open(AddProductComponent, {
        data: { 
        name: this.products["name"],
        price:  this.products["price"],
        picture:  this.products["pic"],
        catagory:  this.products["catagory"] }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log("result =====>"+result);
        this.addProduct(result)
      });
    }
    
  

  addProduct(product){
      console.log("Start, recieved event to create product")
        if(product != null){
          this.products.push({
            id:  this.products.length + 1 ,
            name: product["name"],
            price: product["price"],
            picture: product["pic"],
            catagory: product["catagory"]
            
          }
          );}
    }


  deleteProduct(id){
      this.products = this.products.filter((product) => product["id"] != id);
    }
  

  editProduct(editProduct){
    console.log("Start, recieved event to update product")
    if(editProduct != null){
      console.log("Start, updating product with id  "+ editProduct["id"])

        this.products.forEach(product => {
          if(editProduct["id"] == product["id"] ){
            console.log("end, found a match ")
            product["name"] = editProduct["name"];
            product["price"] = editProduct["price"];
            product["pic"] = editProduct["pic"];
            product["catagory"] = editProduct["catagory"];
          }

        })
    }
  }

  openEditDialog(product){
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: { 
      id:  product["id"],
      name: product["name"],
      price:  product["price"],
      picture:  product["pic"],
      catagory:  product["catagory"] }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("result =====>"+result);
      this.editProduct(result);
    });
  }


  

}
