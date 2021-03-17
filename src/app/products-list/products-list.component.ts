import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<any>

  constructor(private productServiceService: ProductServiceService ,
    private router: Router ) { }

  ngOnInit(): void {
   this.getProductsFromService()
  }



  getProductsFromService(){
    this.productServiceService.getData().subscribe(data =>{
      this.products = data;
    }, error => console.log(error));

    }

    viewDetails(id: number){
      this.router.navigate(['details',id])
     }

     updateProduct(id: number){
      this.router.navigate(['update',id]);
    }
 
    addProduct(){
      this.router.navigate(['add']);
    }
}
