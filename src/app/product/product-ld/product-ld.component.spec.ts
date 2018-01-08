import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLdComponent } from './product-ld.component';

describe('ProductLdComponent', () => {
  let component: ProductLdComponent;
  let fixture: ComponentFixture<ProductLdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
