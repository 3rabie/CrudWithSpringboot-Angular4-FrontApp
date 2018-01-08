import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperatorService } from '../operator.service';
import { Operators } from '../Operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operator-cu',
  templateUrl: './operator-cu.component.html',
  styleUrls: ['./operator-cu.component.css'],
  providers: [OperatorService]
})
export class OperatorCuComponent implements OnInit, OnDestroy {

  operator: Operators;
  operatorForm: FormGroup;
  title = 'New Operator';
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private operatorService: OperatorService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.operatorForm = new FormGroup({
      name: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });


    if (this.id) {
      this.operatorService.findByID(this.id).subscribe(
        operator => {
          this.id = operator.id;
          this.operatorForm.patchValue({
            name: operator.name,
            description: operator.country
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

    if (this.operatorForm.valid) {
      if (this.id) {

        const operator: Operators = new Operators(this.id,
          this.operatorForm.controls['name'].value,
          this.operatorForm.controls['country'].value);
        this.operatorService.updateOperator(this.id, operator).subscribe();
      } else {
        const operator: Operators = new Operators(null,
          this.operatorForm.controls['name'].value,
          this.operatorForm.controls['country'].value);
        this.operatorService.create(operator).subscribe();

      }
      this.operatorForm.reset();
      this.router.navigate(['/operator']);
    }
  }

  redirectOperatorPage() {

    this.router.navigate(['/operator']);

  }

}
