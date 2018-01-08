import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorLdComponent } from './operator-ld.component';

describe('OperatorLdComponent', () => {
  let component: OperatorLdComponent;
  let fixture: ComponentFixture<OperatorLdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorLdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorLdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
