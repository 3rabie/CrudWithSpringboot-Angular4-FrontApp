import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCuComponent } from './product-cu.component';

describe('ProductCuComponent', () => {
  let component: ProductCuComponent;
  let fixture: ComponentFixture<ProductCuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
