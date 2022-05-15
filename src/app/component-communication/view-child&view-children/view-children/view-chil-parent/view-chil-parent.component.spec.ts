import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChilParentComponent } from './view-chil-parent.component';

describe('ViewChilParentComponent', () => {
  let component: ViewChilParentComponent;
  let fixture: ComponentFixture<ViewChilParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChilParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChilParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
