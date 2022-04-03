import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelChangeComponent } from './ngmodel-change.component';

describe('NgmodelChangeComponent', () => {
  let component: NgmodelChangeComponent;
  let fixture: ComponentFixture<NgmodelChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
