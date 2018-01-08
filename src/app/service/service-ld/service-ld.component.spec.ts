import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLdComponent } from './service-ld.component';

describe('ServiceLdComponent', () => {
  let component: ServiceLdComponent;
  let fixture: ComponentFixture<ServiceLdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
