import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibChild1Component } from './sib-child1.component';

describe('SibChild1Component', () => {
  let component: SibChild1Component;
  let fixture: ComponentFixture<SibChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
