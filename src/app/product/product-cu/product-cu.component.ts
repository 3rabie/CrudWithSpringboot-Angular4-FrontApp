import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-cu',
  templateUrl: './product-cu.component.html',
  styleUrls: ['./product-cu.component.css'],
  providers: [ProductService]
})
export class ProductCuComponent implements OnInit, OnDestroy {

  product: Product;
  productForm: FormGroup;
  title= 'New Products';
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      minPrice: new FormControl('', Validators.required),
      maxPrice: new FormControl('', Validators.required)
    });


    if (this.id) {
      this.productService.findByID(this.id).subscribe(
        product => {
          this.id = product.id;
          this.productForm.patchValue({
            name: product.name,
            description: product.description,
            minPrice: product.min_Price,
            maxPrice: product.max_Price
          });
        }, error => {
          console.log(error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {

    if (this.productForm.valid) {
      if (this.id) {

        const product: Product = new Product(this.id,
          this.productForm.controls['name'].value,
          this.productForm.controls['description'].value,
          this.productForm.controls['minPrice'].value,
          this.productForm.controls['maxPrice'].value);
        this.productService.updateProduct(this.id, product).subscribe();
      } else {
        const product: Product = new Product(null,
          this.productForm.controls['name'].value,
          this.productForm.controls['description'].value,
          this.productForm.controls['minPrice'].value,
          this.productForm.controls['maxPrice'].value);
        this.productService.create(product).subscribe();

      }
      this.productForm.reset();
      this.router.navigate(['/product']);
    }
  }

  redirectProductPage() {

    this.router.navigate(['/product']);

  }

}

