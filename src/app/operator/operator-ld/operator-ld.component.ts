import { Component, OnInit } from '@angular/core';
import { Operators } from '../Operators';
import { OperatorService } from '../operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-ld',
  templateUrl: './operator-ld.component.html',
  styleUrls: ['./operator-ld.component.css'],
  providers: [OperatorService]
})
export class OperatorLdComponent implements OnInit {

  private operators: Operators;

  title = 'Operators';

  constructor(private router: Router,
    private operatorService: OperatorService) { }

  listAllOperators() {
    this.operatorService.listAll().subscribe(
      operators => {
        this.operators = operators;
      },
      err => {
        console.log(err);
      }

    );
  }

  ngOnInit() {
    this.listAllOperators();
  }

  editOperatorPage(operator: Operators) {
    if (operator) {
      this.router.navigate(['/operator/update', operator.id]);
    }
  }

  redirectNewOperatorPage() {
    this.router.navigate(['/operaotr/create']);
  }
  
  onDelete(operator: Operators) {
    if (operator) {
      this.operatorService.deleteOperatorById(operator.id).subscribe(
        res => {
          this.listAllOperators();
          this.router.navigate(['/operator/']);
          console.log('done');
        }
      );
    }
  }

}
