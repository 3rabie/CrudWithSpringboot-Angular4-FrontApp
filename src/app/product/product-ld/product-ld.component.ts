import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-ld',
  templateUrl: './product-ld.component.html',
  styleUrls: ['./product-ld.component.css'],
  providers: [ProductService]
})
export class ProductLdComponent implements OnInit {

  private products: Product[];

  title = 'Products';

  constructor(private router: Router,
    private productService: ProductService) { }


  listAllProducts() {
    this.productService.listAll().subscribe(
      products => {
        this.products = products;
      },
      err => {
        console.log(err);
      }

    );
  }

  ngOnInit() {
    this.listAllProducts();
  }


  editProductPage(product: Product) {
    if (product) {
      this.router.navigate(['product/update/', product.id]);
    }
  }

  redirectNewProductPage() {
    this.router.navigate(['/product/create']);
  }

  deleteProduct(product: Product) {
    if (product) {
      this.productService.deleteProductById(product.id).subscribe(
        res => {
          this.listAllProducts();
          this.router.navigate(['/product/']);
          console.log('done');
        }
      );
    }
  }

}



