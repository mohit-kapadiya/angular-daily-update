import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTemplateDrivenComponent } from './set-template-driven.component';

describe('SetTemplateDrivenComponent', () => {
  let component: SetTemplateDrivenComponent;
  let fixture: ComponentFixture<SetTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
