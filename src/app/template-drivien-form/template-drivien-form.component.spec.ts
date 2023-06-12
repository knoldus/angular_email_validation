import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivienFormComponent } from './template-drivien-form.component';

describe('TemplateDrivienFormComponent', () => {
  let component: TemplateDrivienFormComponent;
  let fixture: ComponentFixture<TemplateDrivienFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivienFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
