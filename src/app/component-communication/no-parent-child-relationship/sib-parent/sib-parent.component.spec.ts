import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibParentComponent } from './sib-parent.component';

describe('SibParentComponent', () => {
  let component: SibParentComponent;
  let fixture: ComponentFixture<SibParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
