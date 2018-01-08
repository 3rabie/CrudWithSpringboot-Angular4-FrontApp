import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCuComponent } from './operator-cu.component';

describe('OperatorCuComponent', () => {
  let component: OperatorCuComponent;
  let fixture: ComponentFixture<OperatorCuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorCuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
