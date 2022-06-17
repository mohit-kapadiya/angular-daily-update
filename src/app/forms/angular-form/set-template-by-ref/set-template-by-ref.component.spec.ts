import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTemplateByRefComponent } from './set-template-by-ref.component';

describe('SetTemplateByRefComponent', () => {
  let component: SetTemplateByRefComponent;
  let fixture: ComponentFixture<SetTemplateByRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTemplateByRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTemplateByRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
