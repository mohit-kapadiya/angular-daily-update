import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibChild2Component } from './sib-child2.component';

describe('SibChild2Component', () => {
  let component: SibChild2Component;
  let fixture: ComponentFixture<SibChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
