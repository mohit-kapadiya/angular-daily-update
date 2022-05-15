import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChilChildComponent } from './view-chil-child.component';

describe('ViewChilChildComponent', () => {
  let component: ViewChilChildComponent;
  let fixture: ComponentFixture<ViewChilChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChilChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChilChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
