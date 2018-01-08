import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product';
import { OperatorService } from '../../operator/operator.service';
import { Operators } from '../../operator/Operators';
import { ServiceService } from '../service.service';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-cu',
  templateUrl: './service-cu.component.html',
  styleUrls: ['./service-cu.component.css'],
  providers: [ServiceService, ProductService, OperatorService]
})
export class ServiceCuComponent implements OnInit, OnDestroy {

  service: Service;
  products: Product[];
  operators: Operators;
  serviceForm: FormGroup;
  title= 'New Services';
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private productService: ProductService,
    private operatorService: OperatorService) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
      });

      this.productService.listAll().subscribe(
        products => {
          this.products = products;
        }
      );

      this.operatorService.listAll().subscribe(
        operators => {
          this.operators = operators;
        }
      )
      this.serviceForm = new FormGroup({
        name: new FormControl('', Validators.required),
        type: new FormControl(''),
        productName: new FormControl('', Validators.required),
        operatorName: new FormControl('', Validators.required),
        OperatorPackID: new FormControl('', Validators.required),
        OperatorServID: new FormControl('', Validators.required)
      });


      if (this.id) {
        this.serviceService.findByID(this.id).subscribe(
          service => {
            this.id = service.id;
            this.serviceForm.patchValue({
              name: service.name,
              type: service.type,
              productName: service.productID,
              operatorName: service.operatorID,
              OperatorPackID: service.operatorPackageID,
              OperatorServID: service.operatorServiceID
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

      if (this.serviceForm.valid) {
        if (this.id) {

          const service: Service = new Service(this.id,
            this.serviceForm.controls['name'].value,
            this.serviceForm.controls['type'].value,
            this.serviceForm.controls['productName'].value,
            this.serviceForm.controls['operatorName'].value,
            this.serviceForm.controls['OperatorPackID'].value,
            this.serviceForm.controls['OperatorServID'].value);
          this.serviceService.updateService(this.id, service).subscribe();
        } else {
          const service: Service = new Service(null,
            this.serviceForm.controls['name'].value,
            this.serviceForm.controls['type'].value,
            this.serviceForm.controls['productName'].value,
            this.serviceForm.controls['operatorName'].value,
            this.serviceForm.controls['OperatorPackID'].value,
            this.serviceForm.controls['OperatorServID'].value);
          this.serviceService.create(service).subscribe();

        }
        this.serviceForm.reset();
        this.router.navigate(['/service']);
      }
    }

    redirectServicePage() {

      this.router.navigate(['/service']);

    }
}
