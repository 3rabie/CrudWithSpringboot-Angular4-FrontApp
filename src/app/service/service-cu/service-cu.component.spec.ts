import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCuComponent } from './service-cu.component';

describe('ServiceCuComponent', () => {
  let component: ServiceCuComponent;
  let fixture: ComponentFixture<ServiceCuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
